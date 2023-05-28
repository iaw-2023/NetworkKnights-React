'use client';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function PetCard(pet) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={pet.image} />
      <Card.Body>
        <Card.Title>{pet.name}</Card.Title>
        <Card.Text>{pet.description}</Card.Text>
        <Button variant="primary">Adoptar</Button>
      </Card.Body>
    </Card>
  );
}

export default PetCard;