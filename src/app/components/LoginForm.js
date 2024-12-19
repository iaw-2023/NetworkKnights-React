'use client' ;
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

function LoginForm({ onFormSubmit }) {
  const [validated, setValidated] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const emailPattern = "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      setValidated(true);
    } else {
      const formData = {
        email: email,
        password: password
      };
      onFormSubmit(formData); // Llama a la función onFormSubmit y pasa los datos del formulario
    }
  };

  return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          
          <Row className="mb-3">
            <Form.Group as={Col} md="5" controlId="validationCustom01">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    required
                    type="email"
                    placeholder="Email"
                    pattern={emailPattern}
                    onChange={handleEmailChange}
                />
                <Form.Control.Feedback type="invalid">Por favor, introduce un email válido.</Form.Control.Feedback>
                <Form.Control.Feedback> Valido!</Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="5" controlId="validationCustom02">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control 
                    type="password"
                    placeholder="Contraseña" 
                    required
                    minLength={6}
                    maxLength={30}
                    onChange={handlePasswordChange}
                />
                <Form.Control.Feedback type="invalid"> La contraseña debe tener entre 6 y 30 caracteres. </Form.Control.Feedback>
                <Form.Control.Feedback> Valido!</Form.Control.Feedback>
            </Form.Group> 
                  
          </Row>
          
          <Button type="submit">Iniciar sesión</Button>
        </Form>
  );
}

export default LoginForm;