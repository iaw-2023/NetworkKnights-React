'use client' ;
import React from "react";
import { Container, Row, Col } from 'react-bootstrap';

function index() {
  return (
    <div className="black-rounded-div">
      <h1>Bienvenid@, Usuario!</h1>
      <Container>
        <Row>
          <Col>
            <h2>Categorías</h2>
            <p>Podrás ver todas las categorías disponibles</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2>Mascotas</h2>
            <p>Podrás ver todas las mascotasdisponibles para adopcion.</p>
          </Col>
        </Row>
        
      </Container>
    </div>
  );
}

export default index