'use client' ;

<<<<<<< Updated upstream
import { Form, FormGroup, FormControl, FormLabel, Button } from "react-bootstrap"
import Modal from 'react-bootstrap/Modal';
import React, {useState, useEffect} from "react";
import OrderModal from "../../components/OrderModal";
import Link from "next/link";
import { useUser } from '@auth0/nextjs-auth0/client';


function AdoptarId({params}) {

  const { user, error, isLoading } = useUser();
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>;

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);

  const handleClose = () => setShow(false);


  //const apiURL = 'https://rodi-duran-laravel-79zb-hhxw14sen-network-knights.vercel.app/rest';
  const apiURL = 'http://127.0.0.1:8000/rest';
  const [email, setEmail] = useState('');

=======
import { Form, FormGroup, FormControl, FormLabel, Button } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import OrderModal from "../../components/OrderModal";
import Link from "next/link";
import { useUser } from '@auth0/nextjs-auth0/client';
import { useRouter } from 'next/navigation';


function AdoptarId({ params }) {

   const { user, error, isLoading } = useUser();
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>;

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);

  const handleClose = () => setShow(false);

  const router = useRouter();

  const apiURL = 'http://127.0.0.1:8000/rest';
  const [email, setEmail] = useState('');
  const [pet, setPet] = useState(null);
  const [tips, setTips] = useState('');
  const [address, setAddress] = useState('');
  
>>>>>>> Stashed changes
  const handleSubmit = async (e) => {
    
    e.preventDefault();
    
    const queryJson={
      email: user.email,
      id_pet: params.id,
      name: user.given_name,
      surname: user.family_name,
      address: address
    } 

    console.log("Datos enviados:", queryJson);

    const response = await fetch("/api/create-order", {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(queryJson)
<<<<<<< Updated upstream
=======
    });

    router.push('/perfil'); // Cambiá '/perfil' por la ruta real del perfil de usuario
    

    };

  useEffect(() => {
    fetch(`${apiURL}/pets/${params.id}`)
      .then(response => response.json())
      .then(data => {
        setPet(data);
        getPetTips(data); // Obtener consejos automáticamente
      })
      .catch(error => console.error('Error fetching pet data:', error));
  }, [params.id]);

  const getPetTips = async (petData) => {
    if (!petData) return;

    const response = await fetch(`${apiURL}/getPetTips`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: petData.name,
        category: petData.category_name,
        sex: petData.sex,
        size: petData.size,
      }),
/*>>>>>>> main*/
>>>>>>> Stashed changes
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
        Enviar orden
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

<<<<<<< Updated upstream
        <Modal.Body>
          <p>Tu orden ha sido creada con éxito, nos comunicaremos por mail con los datos.</p>
        </Modal.Body>
=======
          {/* Formulario para enviar la orden */}
          <Form onSubmit={handleSubmit} style={styles.form}>
            <FormGroup controlId="formEmail">
              <FormLabel>Email</FormLabel>
              <FormControl
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={styles.input}
              />
            </FormGroup>
            <FormGroup controlId="formAddress">
              <FormLabel>Dirección</FormLabel>
                <FormControl
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  style={styles.input}
                />
           </FormGroup>
            <Button  onClick={handleShow} variant="primary" type="submit">
              Adoptar ❤️
            </Button>
          </Form>
        </div>
      )}
>>>>>>> Stashed changes

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            <Link href={"/mascotas"} className='link-dark ms-2'>Aceptar</Link>
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
      </Modal>
    </div>
<<<<<<< Updated upstream

    </Form>
  )
=======
  );


>>>>>>> Stashed changes
}

export default AdoptarId;