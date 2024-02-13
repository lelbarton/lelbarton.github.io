import { Col, Container, Image, Row } from "react-bootstrap";
import { CocktailTable } from "./CocktailTable";

export function ResultsBoard() {

  // const formsClient = new GoogleFormsClient();

  // formsClient.getAllResponses();

  return (
    <Container>
      <Col>
        <Row>
          <CocktailTable/>
        </Row>
        <Row>
          <Col>
            <Row>
              <Image src="entry_qr_code.png" width="25%"/>
            </Row>
            <Row>Scan me to submit a cocktail</Row>
          </Col>
          <Col width="50%">
            <Image src="cocktail.png" width="75%"/>
          </Col>
        </Row>
      </Col>
    </Container>
  )
}
