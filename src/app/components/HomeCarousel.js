import Carousel from 'react-bootstrap/Carousel';

function HomeCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ytimg.com/vi/932XRGF47nQ/maxresdefault.jpg"
          alt = "No compres ¡Adopta!"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.shopify.com/s/files/1/0468/5460/2913/files/certificado-de-adopcion-de-mascotas.jpg?v=1605174675"
          alt = "Cachorro de refugio"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://estaticos-cdn.elperiodico.com/clip/1aca279a-979d-4595-8a24-2411937a88e3_source-aspect-ratio_default_0.jpg"
          alt = "Gatitos abandonados"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.las2orillas.co/wp-content/uploads/2023/04/adoptar-mascota.jpg"
          alt = "Perro en el refugio"
        />
      </Carousel.Item>
      
    </Carousel>
  );
}

export default HomeCarousel;