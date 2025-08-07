import Table from 'react-bootstrap/Table';
import { Container, Row, Col, Card, Button, ListGroup, Image } from 'react-bootstrap';
import { useUser} from '@auth0/nextjs-auth0/client';
import * as auth0Client from '@auth0/nextjs-auth0/client';
import React, {useState, useEffect} from "react";


function TablaPerfil() {

  const apiURL = 'http://127.0.0.1:8000/rest';

  const { user, isLoading} = useUser();
  const [pets, setPets] = useState();
  
  useEffect(() => {
    if(!user) return;

  const getPets = async () => {
    try {
      const response = await fetch("/api/get-orders/" + user.email);
      const data = await response.json();
      setPets(data);     
      console.log("Respuesta del backend:", data);
    } catch (error) {
      console.error("Error al obtener mascotas:", error);
    }
  };

  getPets();
}, [user.email]);

      if (isLoading || !user) {
        // Mostrar un indicador de carga mientras Auth0 verifica la sesión
        return <div>Cargando...</div>;
      }
      const email = user.email;
      //console.log('email:',email);
  
    const categoryNames = {
       1: "Perro",
       2: "Gato",
       3: "Conejo"
    };

    const sexo = {
      male: "Macho",
      female:"Hembra"
    }

    return (

      <Table striped bordered hover >
      <thead>
        <tr>
          <th>ID Orden</th>
          <th>Especie</th>
          <th>Nombre</th>
          <th>Sexo</th>
        </tr>
      </thead>
      <tbody>
        {pets?.map((pet => (
                    <tr key={pet.id} className="mt-4">
                            <td>{pet.id}</td>
                            <td>{categoryNames[pet.id_category]}</td>
                            <td>{pet.name}</td>
                            <td>{sexo[pet.sex]}</td>
                        
                    </tr>
                )))}

      </tbody>
    </Table>

      /*

      <Container>
            <Row>
                {pets?.map((pet => (
                    <Col key={pet.id}md={4} className="mt-4">
                        <PetCard 
                            name={pet.name}
                            sex = {pet.sex}
                            category = {pet.category_name}
                            image = {pet.image}
                            id = {pet.id}
                        />
                    </Col>
                )))}
            </Row>
            <Row className="mt-4">
                <hr className="my-4" />
            </Row>
        </Container>



        <Table striped bordered hover >
          <thead>
            <tr>
              <th>#</th>
              <th>Especie</th>
              <th>Nombre</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan={2}>Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
        */
      );
    }

export default TablaPerfil;