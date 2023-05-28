'use client' ;
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CategoryCard from "../components/CategoryCard";

function Categorias() {
  return(
    <Row>
        <Col md={4} className="mt-4">
            <CategoryCard />
        </Col>
        <Col md={4} className="mt-4">
            <CategoryCard />
        </Col>
        <Col md={4} className="mt-4">
            <CategoryCard />
        </Col>
        <Col md={4} className="mt-4">
            <CategoryCard />
        </Col>
    </Row>
  )
}

export default Categorias