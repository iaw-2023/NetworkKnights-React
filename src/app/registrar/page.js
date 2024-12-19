'use client' ;

import { Row } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import TextoRegistrar from "../components/TextoRegistrar";
import SigninForm from "../components/SigninForm";


function registrar() {
  return(
    <Container>
      <Row className="mt-4">
        <TextoRegistrar />
      </Row>
      <Row className="mt-4">
        <SigninForm />
      </Row>
    </Container>
  )
}

export default registrar;