import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

function SigninForm() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="5" controlId="validationCustom01">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Nombre"
          />
          <Form.Control.Feedback>Valido!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="5" controlId="validationCustom02">
          <Form.Label>Apellido</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Apellido"
          />
          <Form.Control.Feedback>Valido!</Form.Control.Feedback>
        </Form.Group>
      </Row>

      <Row className="mb-3">
      <Form.Group as={Col} md="5" controlId="validationCustom03">
          <Form.Label>Dirección</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Apellido"
          />
          <Form.Control.Feedback>Valido!</Form.Control.Feedback>
        </Form.Group>  
      </Row>

      <Row className="mb-3">
      <Form.Group as={Col} md="5" controlId="validationCustom04">
            <Form.Label>Email</Form.Label>
            <Form.Control
                required
                type="email"
                placeholder="Email"
                pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
            />
            <Form.Control.Feedback type="invalid">Por favor, introduce un email válido.</Form.Control.Feedback>
            <Form.Control.Feedback> Valido!</Form.Control.Feedback>
        </Form.Group>       
      </Row>

      <Row className="mb-3">
      <Form.Group as={Col} md="5" controlId="validationCustom05">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control 
                type="password"
                placeholder="Contraseña" 
                required
                minLength={6}
                maxLength={30}
            />
            <Form.Control.Feedback type="invalid"> La contraseña debe tener entre 6 y 30 caracteres. </Form.Control.Feedback>
            <Form.Control.Feedback> Valido!</Form.Control.Feedback>
        </Form.Group>       
      </Row>

      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Acepto los terminos y condiciones"
          feedback="Debe estar de acuerdo antes de registrarse"
          feedbackType="invalid"
        />
      </Form.Group>
      <Button type="submit">Registrarse</Button>
    </Form>
  );
}

export default SigninForm;