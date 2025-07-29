'use client';
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import PetCard from "../components/PetCard";
import Head from 'next/head';

function Mascotas() {
  const apiURL = 'http://127.0.0.1:8000/rest';
  const [pets, setPets] = useState([]);
  const [noPetsMessage, setNoPetsMessage] = useState(null);

  const getPets = async () => {
    try {
      const response = await fetch(`${apiURL}/pets`);
      const data = await response.json();

      if (data.message) {
        // API devolvió un mensaje (sin mascotas)
        setNoPetsMessage(data.message);
        setPets([]);
      } else {
        // API devolvió un array de mascotas
        setPets(data);
        setNoPetsMessage(null);
      }
    } catch (error) {
      console.error("Error al obtener mascotas:", error);
      setNoPetsMessage("Error al conectar con el servidor.");
      setPets([]);
    }
  };

  useEffect(() => {
    getPets();
  }, []);

  return (
    <Container>
      <Head>
        <title>Mascotas disponibles para adoptar</title>
      </Head>

      <Row>
        {noPetsMessage ? (
          <Col className="mt-5 text-center">
            <h4 className="text-muted">{noPetsMessage}</h4>
          </Col>
        ) : pets.length > 0 ? (
          pets
            .filter(pet => pet && pet.name && pet.image)
            .map(pet => (
              <Col key={pet.id} md={4} className="mt-4">
                <PetCard 
                  name={pet.name}
                  sex={pet.sex}
                  category={pet.category_name}
                  image={pet.image}
                  id={pet.id}
                />
              </Col>
            ))
        ) : null}
      </Row>

      <Row className="mt-4">
        <hr className="my-4" />
      </Row>
    </Container>
  );
}

export default Mascotas;
