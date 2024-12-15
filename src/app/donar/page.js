'use client' ;
import { Row } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import DonationForm from "../components/DonationForm";
import CardPaymentBrick from "../components/MercadoPago";
import { initMercadoPago, CardPayment } from '@mercadopago/sdk-react';






function donar() {
  initMercadoPago('TEST-6b3952a1-158a-46b6-8524-ddf57654222e');
  
    const initialization = {
      amount: 100,
    };
    
    const onSubmit = async (formData) => {
      // callback llamado al hacer clic en el botón enviar datos
      return new Promise((resolve, reject) => {
        fetch('/process_payment', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        })
          .then((response) => response.json())
          .then((response) => {
            // recibir el resultado del pago
            resolve();
          })
          .catch((error) => {
            // manejar la respuesta de error al intentar crear el pago
            reject();
          });
      });
    };
    
    const onError = async (error) => {
      // callback llamado para todos los casos de error de Brick
      console.log(error);
    };
    
    const onReady = async () => {
      /*
        Callback llamado cuando Brick está listo.
        Aquí puedes ocultar cargamentos de su sitio, por ejemplo.
      */
    };
 
  return(
    <Container>
      <Row className="mt-4 ">
        <Col xs={10} className="mx-auto ">
          <h1>Podes hacer tu donación a nuestra pagina web a través de MercadoPago </h1>
        </Col>
      </Row>
      <Row className="mt-4">
      <h3>Doná $1000</h3>
        <Col xs={5} className="border rounded">
        {/* 
          <CardPayment
          initialization={{ amount: 1000 }}
          onSubmit={async (param) => {
            console.log(param);
          }}
          />
        */}
          <CardPayment
             initialization={initialization}
             onSubmit={onSubmit}
             onReady={onReady}
            onError={onError}
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