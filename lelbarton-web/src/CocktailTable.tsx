import { Table } from "react-bootstrap";
import {useEffect, useState} from "react";

const FORM_ID = '1w9fOFF0mFcBWlrCWAqwWbrtrRGJG_5sl-vDwDZXmj2k'
// const GOOGLE_FORM_URL = `https://forms.googleapis.com/v1/forms/${FORM_ID}/responses`

export interface CocktailTableProps {
    accessToken: string
}

export function CocktailTable({accessToken} : CocktailTableProps) {
    const [rows, setRows] = useState<any | undefined>(undefined)


    useEffect(() => {
        const start = async () => {
            await gapi.client.init({
                'discoveryDocs': ['https://forms.googleapis.com/$discovery/rest?version=v1'],
            });


            const response = await gapi.client.forms.forms.responses.list({
                access_token: accessToken,
                formId: FORM_ID,
            })

            console.log(response)
            setRows(response)

        }

        gapi.load('client', start);

    }, []);

return (
    <>
        <code>{JSON.stringify(rows)}</code>
      <Table striped bordered>
        <thead>
        <tr>
          <th>Creator</th>
          <th>Cocktail Name</th>
          <th>Taste</th>
          <th>Appearance</th>
          <th>Overall Score</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>Me</td>
          <td>Speach</td>
          <td>TBD</td>
          <td>TBD</td>
          <td>TBD</td>
        </tr>
        <tr>
          <td>Me2</td>
          <td>Speach2</td>
          <td>TBD</td>
          <td>TBD</td>
          <td>TBD</td>
        </tr>
        </tbody>
      </Table>
    </>
);
}

//
// componentDidMount() {
//   this.timer = setInterval(()=> this.getItems(), 1000);
// }
//
// componentWillUnmount() {
//   this.timer = null; // here...
// }
//
// getItems() {
//   fetch(this.getEndpoint('api url endpoint'))
//     .then(result => result.json())
//     .then(result => this.setState({ items: result }));
// }
