'use client' ;
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FaPaw } from "react-icons/fa";
import Link from "next/link";

function CategoryCard(category) {
  const categoria = category.name;
  return (
    /*
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{categoria}</Card.Title>
        <Link href={"/categorias/"+categoria} >Mostrar {category.name}s</Link>
        
      </Card.Body>
    </Card>
    */
    <Card className="shadow-sm rounded text-center" style={{ width: '18rem', overflow: 'hidden' }}>
      
      <div className="p-3 bg-primary text-white fw-bold fs-5">
        {categoria.toUpperCase()}
      </div>

      <Card.Body>
        <Card.Title className="fw-bold d-flex align-items-center justify-content-center gap-2"><FaPaw />Explorá más!</Card.Title>
        <Link href={`/categorias/${categoria}`} passHref>
          <Button variant="outline-primary" className="mt-2">Ver {categoria}s</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default CategoryCard;