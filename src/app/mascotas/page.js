'use client' ;
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PetCard from "../components/PetCard";

function Mascotas() {
  return(
    <Row>
        <Col md={4} className="mt-4">
            <PetCard 
            name="nombre 1"
            description = "descripcion 1"
            image = "https://estaticos-cdn.prensaiberica.es/clip/823f515c-8143-4044-8f13-85ea1ef58f3a_16-9-discover-aspect-ratio_default_0.jpg" 
            />
        </Col>
        <Col md={4} className="mt-4">
            <PetCard />
        </Col>
        <Col md={4} className="mt-4">
            <PetCard />
        </Col>
        <Col md={4} className="mt-4">
            <PetCard />
        </Col>
    </Row>
  )
}

export default Mascotas