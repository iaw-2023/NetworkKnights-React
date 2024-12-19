'use client' ;
//import { Container } from "postcss";
import LoginForm from "../components/LoginForm";
import { Row } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import ModernList from "../components/ModernList";
import TextoLoguear from "../components/TextoLoguear";

function Loguear() {
  const apiURL ='rodi-duran-laravel-79zb-git-autenticacion-network-knights.vercel.app/rest';
  const handleFormSubmit = async (formData) => {
    try {
      const response = await fetch(`${apiURL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      // Aquí puedes manejar la respuesta de la API
      console.log(data);
      console.log("Inicio de sesión exitoso");
    } catch (error) {
      // Aquí puedes manejar los errores de la solicitud
      console.error(error);
    }
    console.log("Datpooooooooooooooooooooos");
    console.log(formData);
  };

  return (
    <Container>
      <Row className="mt-4">
        <TextoLoguear />
      </Row>
      <Row className="mt-4">
        <Col>
        <LoginForm onFormSubmit={handleFormSubmit} />
        <ModernList />
        </Col>
      </Row>

    </Container>
    
  );
}

export default Loguear;

