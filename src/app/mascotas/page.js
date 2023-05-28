'use client' ;
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PetCard from "../components/PetCard";

function Home() {
  return(
    <Row>
        <Col md={4} className="mt-4">
            <PetCard />
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

export default Home