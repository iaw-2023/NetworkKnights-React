'use client' ;
import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import HomeCarousel from "./components/HomeCarousel";


function index() {
  
  return (
    <div className="black-rounded-div">
      <h1>Bienvenid@, Usuario!</h1>
      <HomeCarousel/>
    </div>
  );
}

export default index