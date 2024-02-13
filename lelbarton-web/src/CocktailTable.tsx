import { Table } from "react-bootstrap";
import { GoogleFormsClient } from "./GoogleFormsClient";

export function CocktailTable() {

  const googleFormsClient = new GoogleFormsClient();

  googleFormsClient.getAllResponses();

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
