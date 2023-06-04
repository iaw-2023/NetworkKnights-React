'use client';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from "next/link";

function PetCard(pet) {
  const petId = pet.id;
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={pet.image} />
      <Card.Body>
        <Card.Title>{pet.name}</Card.Title>
        <Card.Text>{pet.category}</Card.Text>
        <Card.Text>{pet.sex}</Card.Text>
        <Button variant="primary">
          <Link href={"/adoptar/"+petId} >Adoptar</Link>
        </Button>
      </Card.Body>
    </Card>
  );
}

export default PetCard;