import { Table } from "react-bootstrap";
import { useEffect, useState } from "react";

const FORM_ID = '1w9fOFF0mFcBWlrCWAqwWbrtrRGJG_5sl-vDwDZXmj2k'
const SPREADSHEET_ID = '1X_JQ2lXUiSUjictPKL-QBdr6ZlByCUyGjASip4C-a70'

export interface CocktailTableProps {
  accessToken: string;
  refreshMs: number;
}

interface CocktailEntry {
  creator: string;
  cocktailName: string;
  ratings: string[]
}

export function CocktailTable({ accessToken, refreshMs }: CocktailTableProps) {
  const [ratings, setRatings] = useState<CocktailEntry[] | undefined>([])
  const [tableHeaders, setCategories] = useState<string[] | undefined>([])

  useEffect(() => {
    const start = async () => {
      await gapi.client.init({
        'discoveryDocs': ['https://forms.googleapis.com/$discovery/rest?version=v1', 'https://sheets.googleapis.com/$discovery/rest?version=v4'],
      });

      const interval = setInterval(async () => {
        const formsResponse = await gapi.client.forms.forms.responses.list({
          access_token: accessToken,
          formId: FORM_ID,
        })

        console.log(JSON.stringify(formsResponse.result));

        formsResponse.result.responses?.sort((a, b): number => {
          return Date.parse(a.createTime!!) - Date.parse(b.createTime!!)
        })

        const entries = formsResponse.result.responses?.map((response): CocktailEntry => {
          return {
            // We should be able to do answers.values instead of knowing the question ids, but oh well
            creator: response.answers!!['58a06c7d'].textAnswers!!.answers!!.at(0)!!.value!!,
            cocktailName: response.answers!!['4df2cd05'].textAnswers!!.answers!!.at(0)!!.value!!,
            ratings: []
          }
        });

        await gapi.client.sheets.spreadsheets.values.update({
          access_token: accessToken,
          spreadsheetId: SPREADSHEET_ID,
          range: 'Sheet1!A2:B100',
          valueInputOption: 'USER_ENTERED',
          resource: {
            majorDimension: 'ROWS',
            values: entries?.map((entry) => {
              return [entry.creator, entry.cocktailName]
            })
          }
        })

        const ratings = await gapi.client.sheets.spreadsheets.values.get({
          access_token: accessToken,
          spreadsheetId: SPREADSHEET_ID,
          range: 'A:M',
          majorDimension: 'ROWS',
          valueRenderOption: 'FORMATTED_VALUE'
        })

        console.log(JSON.stringify(ratings.result));

        setCategories(ratings.result.values!!.at(0)!!.slice(2))
        const currentRatings = ratings.result.values?.slice(1).map((row): CocktailEntry => {
          return {
            creator: row.at(0),
            cocktailName: row.at(1),
            ratings: row.slice(2)
          }
        });
        setRatings(currentRatings)
      }, refreshMs)

      return () => clearInterval(interval);
    };

    gapi.load('client', start);

  }, []);

  return (
    <div>
      <table id='cocktail-table'>
        <thead>
        <tr>
          <th className="cocktail-table-th">Creator</th>
          <th>Cocktail Name</th>
          {tableHeaders?.map((header) => {
            return <th>{header}</th>
          })}
        </tr>
        </thead>
        <tbody>
        {ratings?.map((cocktailEntry) => {
          return <tr>
            <td>{cocktailEntry.creator}</td>
            <td>{cocktailEntry.cocktailName}</td>
            {cocktailEntry.ratings.map((rating) => {
              return <td>{rating}</td>
            })}
          </tr>
        })}
        </tbody>
      </table>
    </div>
  );
}
