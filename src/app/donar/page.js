'use client' ;
import { Row } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import DonationForm from "../components/DonationForm";
import CardPaymentBrick from "../components/MercadoPago";
import { initMercadoPago, CardPayment } from '@mercadopago/sdk-react';





function donar() {
  initMercadoPago('TEST-6b3952a1-158a-46b6-8524-ddf57654222e');
  return(
    <Container>
      <Row className="mt-4 ">
        <Col xs={10} className="mx-auto ">
          <h1>Podes hacer tu donación a nuestra pagina web a través de MercadoPago </h1>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col xs={5} className="border rounded">
          <CardPayment
          initialization={{ amount: 100 }}
          onSubmit={async (param) => {
            console.log(param);
          }}
          />
        </Col>
        <Col xs={5} className=" mx-auto ">
          <h3 className="border rounded"> Este año llevamos un total de donaciones de: </h3>
        </Col>
      </Row>
    </Container>
  )
}
export default donar;