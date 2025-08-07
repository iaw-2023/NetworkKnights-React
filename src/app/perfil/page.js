'use client';

import React from "react";
import { Container, Row, Col, Card, Button, ListGroup, Image } from 'react-bootstrap';
import Head from 'next/head';
import TablaPerfil from "../components/TablaPerfil";
import TablaPedidos from "../components/TablaPedidos";
import CardPerfil from "../components/CardPerfil";
import '../CarouselDonar.css';
import { useUser } from "@auth0/nextjs-auth0/client";



function perfil(){

  const apiTest = 'https://rodi-duran-laravel-79zb-git-main-network-knights.vercel.app/rest'

    return(

        <Container className="text-center mt-3 pb-4">
        <title>Perfil de usuario | Adopciones</title> 
        <h1 className="display-5 fw-bold text-dark">Información de tu perfil</h1>
        <p className="lead text-muted">
          Aquí podrás ver tu información personal y tus pedidos de adopción.
        </p>
        <hr className="my-4" />
        <Row className="mt-4">
            <Col>
              <CardPerfil />
            </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <h4 className=" text-start fw-bold text-dark">Tus pedidos: </h4>
            <TablaPerfil />
          </Col>
        </Row>
        <Row className="mt-4">
          <hr className="my-4" />
        </Row>
      </Container>

      
    )
}

export default perfil; 