'use client' ;

import { Form, FormGroup, FormControl, FormLabel, Button } from "react-bootstrap"
import Modal from 'react-bootstrap/Modal';
import React, {useState, useEffect} from "react";
import OrderModal from "../../components/OrderModal";


function AdoptarId({params}) {


  const apiURL = 'https://rodi-duran-laravel-79zb-hhxw14sen-network-knights.vercel.app/rest';
  const [email, setEmail] = useState('');

  const handleSubmit = async () => {
    const queryJson={
      email,
      id_pet: params.id
    }

    const response = await fetch(`${apiURL}/orders`, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(queryJson)
    });
  };

 function mostrarModal() {
    <OrderModal/>
    
  };

  return(
    <Form onSubmit={handleSubmit}> 
      <FormGroup controlId="formEmail">
        <FormLabel>Email</FormLabel>
        <FormControl
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormGroup>
    
      <Button onClick={mostrarModal} variant="primary" type="submit">
        Enviar orden
       
      </Button>
    </Form>
  )
}

export default AdoptarId;