import { Button, CardText, Col, Container, Image, Row } from "react-bootstrap";
import { CocktailTable } from "./CocktailTable";
import { useGoogleLogin } from "@react-oauth/google";
import { useState } from "react";

export function ResultsBoard() {

  const [accessToken, setAccessToken] = useState<string | undefined>(undefined)
  const refreshMs = 20000

  const login = useGoogleLogin({
    scope: 'https://www.googleapis.com/auth/forms https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/spreadsheets',
    onSuccess: (response) => {
      console.log(response)
      setAccessToken(response.access_token)
    }
  })

  if (!accessToken) {
    return <Button onClick={() => login()}>Sign in with google.</Button>
  }

  return (
    <Container>
      {
        accessToken && (
          <Row>
            <Col md={4} className="qr-code-col">
              <Row className="qr-code-text">Scan me to submit a cocktail</Row>
              <Row className="qr-code"><Image src="entry_qr_code.png"/></Row>
              <Row className="qr-code-text">Refreshes every {refreshMs / 1000} seconds</Row>
            </Col>
            <Col>
              <CocktailTable accessToken={accessToken} refreshMs={refreshMs}/>
            </Col>
          </Row>)
      }
    </Container>
  )
}
