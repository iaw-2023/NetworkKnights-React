'use client' ;

import { Form, FormGroup, FormControl, FormLabel, Button } from "react-bootstrap"
import Modal from 'react-bootstrap/Modal';
import React, {useState, useEffect} from "react";

function AdoptarId({params}) {
  const apiURL = 'https://rodi-duran-laravel-79zb-hhxw14sen-network-knights.vercel.app/rest';
  const [email, setEmail] = useState('');
  const [showModal, setShowModal] = useState(true);
  const [apiResponse, setApiResponse] = useState('');

    const handleSubmit = async () => {
      const queryJson = {
        email,
        id_pet: params.id
      };
    
      try {
        const response = await fetch(`${apiURL}/orders`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(queryJson)
        });
    
        const data = await response.json();
        setApiResponse(data.message); // Suponiendo que la respuesta de la API contiene un campo "message"
    
        setShowModal(true);
      } catch (error) {
        console.error(error);
      }
    };
    
  

    return (
      <>
        <Form onSubmit={handleSubmit}>
          <FormGroup controlId="formEmail">
            <FormLabel>Email</FormLabel>
            <FormControl type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </FormGroup>
  
          <Button variant="primary" type="submit">
            Enviar orden
          </Button>
        </Form>
  
        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Respuesta de la API</Modal.Title>
          </Modal.Header>
          <Modal.Body>{apiResponse}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

export default AdoptarId;