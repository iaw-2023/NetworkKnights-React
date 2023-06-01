'use client' ;
import Card from 'react-bootstrap/Card';
import Link from "next/link";

function CategoryCard(category) {
  const categoria = category.name;
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>categoria</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Link href={"/categorias/"+categoria} >Mostrar {category.name}s</Link>
        
      </Card.Body>
    </Card>
  );
}

export default CategoryCard;