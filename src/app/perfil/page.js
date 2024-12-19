'use client';

import React from "react";
import { Container, Row, Col, Card, Button, ListGroup, Image } from 'react-bootstrap';
import TablaPerfil from "../components/TablaPerfil";
import CardPerfil from "../components/CardPerfil";

function perfil(){

    return(
        <Container className="text-center mt-3">
        <h1 className="display-5 fw-bold text-dark">Información de tu perfil</h1>
        <p className="lead text-muted">
          Aquí empieza tu camino para adoptar a tu próxima mascota.
        </p>

        <Row className="mt-4">
            <Col>
              <CardPerfil />
            </Col>
            <Col>
            <h4 className=" text-start fw-bold text-dark">Tus pedidos: </h4>
              <TablaPerfil />
            </Col>
        </Row>
      </Container>

      
    )
}

export default perfil; 