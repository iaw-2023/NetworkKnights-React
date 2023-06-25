'use client' ;
import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import HomeCarousel from "./components/HomeCarousel";

import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';

function index() {
  
    return(
    
      <div className="black-rounded-div">
        <h1>Bienvenid@, Usuario!</h1>
        <HomeCarousel/>
      </div>
    
  );
}

export default index