import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './ExampleCarouselImage';
import '../CarouselDonar.css';

function CarouselDonar() {
  return (
    <Carousel className="carousel-donar">
      <Carousel.Item>
        <div className="carousel-text">
          <h2>Tu ayuda puede cambiar vidas:</h2>
          <p>Dona y dale una segunda oportunidad a un animal rescatado.</p>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-text">
          <h2>Apóyanos en nuestra misión:</h2>
          <p>Rescatar, proteger y dar esperanza a quienes más lo necesitan.</p>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-text">
          <h2>Tu generosidad es su salvación:</h2>
          <p>Ayúdanos a salvar más vidas hoy.</p>
        </div>
      </Carousel.Item>
    </Carousel>
  );

}

export default CarouselDonar;