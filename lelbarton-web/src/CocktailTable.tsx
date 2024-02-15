import { Table } from "react-bootstrap";
import { useEffect } from "react";

const FORM_ID = '1w9fOFF0mFcBWlrCWAqwWbrtrRGJG_5sl-vDwDZXmj2k'
// const GOOGLE_FORM_URL = `https://forms.googleapis.com/v1/forms/${FORM_ID}/responses`

export function CocktailTable() {
  // const googleFormsClient = new GoogleFormsClient();

  // googleFormsClient.getAllResponses();
  // componentDidMount() {
  useEffect(() => {
    // this is taken directly from Google documentation:
    // https://developers.google.com/api-client-library/javascript/start/start-js
    function start() {
      // Initializes the client with the API key and the Translate API.
      gapi.load('client:auth2', () => {// callback function});
        gapi.client.init({
          'apiKey': 'API_KEY', // on cloud account
          'clientId': 'CLIENT_ID', // on cloud account
          'scope': 'https://www.googleapis.com/auth/forms',
          'discoveryDocs': ['https://forms.googleapis.com/$discovery/rest?version=v1'],
        }).then(function () {
          // Executes an API request, and returns a Promise.
          // The method name `language.translations.list` comes from the API discovery.
          return gapi.client.forms.forms.responses.list({
            formId: FORM_ID,
          })
          // return gapi.client.language.translations.list({
          //   q: 'hello world',
          //   source: 'en',
          //   target: 'de',
          // });
        }).then(function (response) {
          console.log(response.result.responses);
        }, function (reason) {
          console.log('Error: ' + reason.result.error.message);
        });
        // };

        // Loads the JavaScript client library and invokes `start` afterwards.
      })}
        gapi.load('client', start);
      });

    return (
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
