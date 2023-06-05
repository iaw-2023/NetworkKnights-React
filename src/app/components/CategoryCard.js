'use client' ;
import Card from 'react-bootstrap/Card';
import Link from "next/link";

function CategoryCard(category) {
  const categoria = category.name;
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{categoria}</Card.Title>
        <Link href={"/categorias/"+categoria} >Mostrar {category.name}s</Link>
        
      </Card.Body>
    </Card>
  );
}

export default CategoryCard;