'use client' ;
import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import HomeCarousel from "./components/HomeCarousel";
import TextoIndex from "./components/TextoIndex";
import ModernList from "./components/ModernList";
import ProfileClient from "./components/ProfileClient";

import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';

function index() {
  
    return(
      <Container>
          <Row>
            <TextoIndex />
          </Row>
          <hr className="my-4" />
          <Row className="mt-2">
            <Col xs={10} className="mx-auto">
              <HomeCarousel/>
            </Col>
          </Row>       
          <Row className="mt-4">
            <hr className="my-4" />
          </Row>
      </Container>   
  );
}

export default index