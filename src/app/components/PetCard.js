'use client';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function PetCard() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://estaticos-cdn.prensaiberica.es/clip/823f515c-8143-4044-8f13-85ea1ef58f3a_16-9-discover-aspect-ratio_default_0.jpg" />
      <Card.Body>
        <Card.Title>Nombre mascota</Card.Title>
        <Card.Text>
          Descripcion de la mascota a adoptar
        </Card.Text>
        <Button variant="primary">Adoptar</Button>
      </Card.Body>
    </Card>
  );
}

export default PetCard;