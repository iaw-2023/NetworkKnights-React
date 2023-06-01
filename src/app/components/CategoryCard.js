'use client' ;
import Card from 'react-bootstrap/Card';

function CategoryCard(category) {
  const categoria = category.name;
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{category.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href='/mascotas_categoria' handler={categoria}>Mostrar {category.name}s</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default CategoryCard;