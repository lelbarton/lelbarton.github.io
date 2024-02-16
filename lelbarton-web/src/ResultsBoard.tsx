import {Button, Col, Container, Image, Row} from "react-bootstrap";
import { CocktailTable } from "./CocktailTable";
import {useGoogleLogin} from "@react-oauth/google";
import {useState} from "react";

export function ResultsBoard() {

  const [accessToken, setAccessToken] = useState<string | undefined>(undefined)
  // const formsClient = new GoogleFormsClient();

  // formsClient.getAllResponses();

  const login = useGoogleLogin({
    scope: 'https://www.googleapis.com/auth/forms',
    onSuccess: (response) => {
        console.log(response)
        setAccessToken(response.access_token)
    }
  })

    if (!accessToken) {
        return  <Button onClick={() => login()}>Sign in with google.</Button>
    }

  return (
    <Container>
      {
        accessToken && (<Col>
          <Row>
            <CocktailTable accessToken={accessToken}/>
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
        </Col>)

      }
    </Container>
  )
}
