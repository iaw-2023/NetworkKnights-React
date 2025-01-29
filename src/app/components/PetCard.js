'use client';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from "next/link";
import { FaPaw } from "react-icons/fa";  // Icono de mascota
import { BsGenderMale, BsGenderFemale } from "react-icons/bs";  // Iconos de género

function PetCard(pet) {
  const petId = pet.id;
  return (
    <Card className="shadow-sm rounded text-center" style={{ width: '18rem', overflow: 'hidden' }}>
      <Card.Img variant="top" src={pet.image} style={{ height: '200px', objectFit: 'cover' }} />
      <Card.Body className="d-flex flex-column align-items-center">
        
        <Card.Title className="fw-bold text-secondary">{pet.name}</Card.Title>
          <Card.Text className="text-muted d-flex align-items-center gap-2"> <
            FaPaw className="text-warning" /> {pet.category}
          </Card.Text>
          <Card.Text className="text-muted d-flex align-items-center gap-2">
          {pet.sex === 'male' ? <BsGenderMale className="text-info" /> : <BsGenderFemale className="text-danger" />} {pet.sex}
          </Card.Text>
        
        <Button variant="outline-secondary">
          <Link href={"/adoptar/"+petId} style={{ textDecoration: 'none' }} className='link-dark mt-2'>Adoptar</Link>
        </Button>
      
      </Card.Body>
    </Card>
  );
}

export default PetCard;