import { useState } from 'react';
import { Col, Row, Form, Button, Image } from 'react-bootstrap';

function DonationForm() {
  const [validated, setValidated] = useState(false);
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [securityCode, setSecurityCode] = useState('');

  const handleCardNumberChange = (event) => {
    const { value } = event.target;
    let formattedValue = value.replace(/\s/g, ''); // Eliminar espacios existentes
    if (formattedValue.length > 0) {
      formattedValue = formattedValue.match(new RegExp('.{1,4}', 'g')).join(' ');
    }
    setCardNumber(formattedValue);
  };

  const handleExpirationDateChange = (event) => {
    const { value } = event.target;
    let formattedValue = value.replace('/', ''); // Eliminar barras existentes
    if (formattedValue.length > 2) {
      formattedValue = formattedValue.slice(0, 2) + '/' + formattedValue.slice(2);
    }
    setExpirationDate(formattedValue);
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };
  
  const handleSecurityCodeChange = (event) => {
    const { value } = event.target;
    const formattedValue = value.slice(0, 3);
    setSecurityCode(formattedValue);
  };
  return (
    <Row>
    <Col>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
                <Form.Group as={Col} md="9" controlId="formCardNumber">
                    <Form.Label>Número de tarjeta</Form.Label>
                    <Form.Control
                    required
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    value={cardNumber}
                    onChange={handleCardNumberChange}
                    pattern="([0-9]{4}\s?[0-9]{4}\s?[0-9]{4}\s?[0-9]{4})"
                    maxLength={19} 
                    />
                    <Form.Control.Feedback type="invalid">
                    Por favor, introduce un número de tarjeta válido.
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>
        
            <Row className="mb-3">
                <Form.Group as={Col} md="9" controlId="formCardName">
                    <Form.Label>Nombre en la tarjeta</Form.Label>
                    <Form.Control
                    required
                    type="text"
                    placeholder="Nombre Apellido"
                    />
                    <Form.Control.Feedback type="invalid">
                    Por favor, introduce el nombre en la tarjeta.
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>
        
            <Row className="mb-3">
                <Form.Group as={Col} md="9" controlId="formExpiration">
                    <Form.Label>Fecha de vencimiento</Form.Label>
                    <Form.Control
                    required
                    type="text"
                    placeholder="MM/AA"
                    value={expirationDate}
                    onChange={handleExpirationDateChange}
                    pattern="(0[1-9]|1[0-2])\/[0-9]{2}"
                    />
                    <Form.Control.Feedback type="invalid">
                    Por favor, introduce una fecha de vencimiento válida (MM/AA).
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>
        
            <Row className="mb-3">
                <Form.Group as={Col} md="9" controlId="formCVC">
                    <Form.Label>Código de seguridad</Form.Label>
                    <Form.Control
                    required
                    type="text"
                    placeholder="123"
                    value={securityCode}
                    onChange={handleSecurityCodeChange}
                    pattern="[0-9]{3}"
                    maxLength={3}
                    />
                    <Form.Control.Feedback type="invalid">
                    Por favor, introduce un codigo de seguridad válido.
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>
          
        <Button type="submit">Enviar</Button>
        
        </Form>
    </Col>
    <Col >
    <Image src="https://th.bing.com/th/id/OIP.CeDKiY3QmtiEnrrGYR0E8wAAAA?pid=ImgDet&rs=1" alt="Imagen" />
    </Col>
  </Row>
  );
}

export default DonationForm;
