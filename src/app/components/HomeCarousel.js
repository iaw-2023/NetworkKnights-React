import Carousel from 'react-bootstrap/Carousel';
import React, {useState, useEffect} from "react";

function HomeCarousel() {

  const apiURL = "https://dog.ceo/api/breeds/image/random/4"
  const [dogs, setDogs] = useState();

  const getDogs = async() => {
    const response = await fetch(apiURL);
    setDogs(await response.json());
  }

  useEffect( () => {
    getDogs();
  },[]);

  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ytimg.com/vi/932XRGF47nQ/maxresdefault.jpg"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={!dogs ? "" : dogs.message[0]}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={!dogs ? "" : dogs.message[1]}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={!dogs ? "" : dogs.message[2]}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={!dogs ? "" : dogs.message[3]}
        />
      </Carousel.Item>
      
    </Carousel>
  );
}

export default HomeCarousel;