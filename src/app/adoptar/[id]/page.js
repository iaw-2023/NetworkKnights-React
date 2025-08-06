'use client';

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
    });

    const data = await response.json();
    setTips(data.tips || 'No se pudieron obtener los consejos.');
  };

  return (
    <div style={styles.container}>
      {/* Sección de detalles de la mascota */}
      {pet && (
        <div style={styles.petCard}>
          <h2 style={styles.title}>{pet.name}</h2>
          <img src={pet.image} alt={pet.name} style={styles.petImage} />
          <p style={styles.petText}>🐾 Tipo: <strong>{pet.category_name}</strong></p>
          <p style={styles.petText}>
  ⚧ Sexo: <strong>{pet.sex === "male" ? "Macho" : "Hembra"}</strong>
</p>


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

      {/* Sección de Consejos de Cuidado */}
      <div style={styles.tipsContainer}>
        <h4 style={styles.tipsTitle}>Consejos de Cuidado 🐶</h4>
        <p style={styles.tipsText}>{tips}</p>
      </div>
    </div>
  );


}

// Estilos mejorados
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: '40px',
    fontFamily: 'Poppins, sans-serif',
  },
  petCard: {
    width: '60%',
    padding: '20px',
    borderRadius: '15px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
    textAlign: 'center',
  },
  title: {
    fontSize: '28px',
    fontWeight: 'bold',
    color: '#333',
  },
  petImage: {
    width: '100%',
    maxWidth: '300px',
    borderRadius: '10px',
    marginBottom: '15px',
  },
  petText: {
    fontSize: '18px',
    color: '#555',
    marginBottom: '5px',
  },
  form: {
    marginTop: '20px',
  },
  input: {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ddd',
    width: '100%',
  },
  button: {
    marginTop: '10px',
    backgroundColor: '#ff7b00',
    border: 'none',
    padding: '10px 20px',
    fontSize: '16px',
    borderRadius: '8px',
    cursor: 'pointer',
  },
  tipsContainer: {
    width: '30%',
    padding: '20px',
    backgroundColor: '#f8f9fa',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    position: 'fixed',
    right: '20px',
    top: '50px',
    fontSize: '16px',
    lineHeight: '1.5',
  },
  tipsTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '10px',
  },
  tipsText: {
    color: '#666',
  },
};

export default AdoptarId;
