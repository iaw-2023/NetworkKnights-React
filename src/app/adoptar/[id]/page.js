'use client' ;

import { Form, FormGroup, FormControl, FormLabel, Button } from "react-bootstrap"
import Modal from 'react-bootstrap/Modal';
import React, {useState, useEffect} from "react";
import OrderModal from "../../components/OrderModal";
import Link from "next/link";


function AdoptarId({params}) {

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);

  const handleClose = () => setShow(false);


  const apiURL = 'https://rodi-duran-laravel-79zb-hhxw14sen-network-knights.vercel.app/rest';
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    
    e.preventDefault();
    
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

   // handleClose();
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
    
      <Button onClick={handleShow} variant="primary" type="submit">
        Enviar ordennnnnnnnnn
      </Button>

      <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
      >
      <Modal show={show} onHide={handleClose}>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Orden Exitosa!</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Tu orden ha sido creada con éxito, nos comunicaremos por mail con los datos.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            <Link href={"/mascotas"} className='link-dark ms-2'>Aceptar</Link>
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
      </Modal>
    </div>

    </Form>
  )
}

export default AdoptarId;