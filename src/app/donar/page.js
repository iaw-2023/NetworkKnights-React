'use client' ;
import { Row } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';
import { useState, useRef } from 'react';
import Form from 'react-bootstrap/Form';
import CarouselDonar from "src/app/components/Carousel";

function donar() {
  const apiURL = 'https://rodi-duran-laravel-79zb-h08vqyo8z-network-knights.vercel.app/rest';
  const apiTest = 'http://127.0.0.1:8000/rest'
  const [preferenciaId, setPreferenciaId] = useState(null);
  const [montoDonacion, setMontoDonacion] = useState(null);
  const monto = useRef(null);

  initMercadoPago('TEST-6b3952a1-158a-46b6-8524-ddf57654222e', {
    locale: "es-AR",
  });

  const crearPreferencia = async(monto) => {

    try {
        const response = await fetch(`${apiTest}/donacion`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: "donacion",
          quantity: 1,
          amount: monto,
        }),
      });

      const data = await response.json();
      const { preference_id } = data;
      return preference_id;

    } catch(error) {
      console.log(error);
    }
  }

  const ejecutarDonacion = async (monto) => {
    const id = await crearPreferencia(monto);
    if(id) {
      setPreferenciaId(id);
    }
  };

    return(
      <Container>
        <Row className="mt-4">
          <Col className="mx-auto">
            <CarouselDonar />
          </Col>
        </Row>

        <Row className="mt-4">
          <Col xs={6} className="py-3 px-5 border rounded">
          <h3>Ingresá un monto:</h3>
            <div class="input-group mb-3">
              <span class="input-group-text">$</span>
              <input type="text" class="form-control" onChange={(evento) => {ejecutarDonacion(evento.target.value)}}/>
            </div>
            <Wallet initialization={{preferenceId: preferenciaId, redirectMode: 'self'}}/>
          </Col>
          <Col xs={12} md={6} className="p-4 border rounded text-styled ">
            <div className="text-center">
              <h3 className="mb-4 text-secondary">Este año llevamos un total de donaciones de:</h3>
              <div className="d-inline-block p-4 rounded-circle bg-primary text-white display-4 fw-bold">
                55
              </div>
              <h4 className="pt-4 text-secondary">¡Ayúdanos a seguir buscando un hogar!</h4>
              <button className="btn btn-primary mt-4 px-4 py-2">Dona Ahora</button>
            </div>
          </Col>
        </Row>
        <Row className="mt-4">
          <hr className="my-4" />
        </Row>
      </Container>
    )
  }

export default donar