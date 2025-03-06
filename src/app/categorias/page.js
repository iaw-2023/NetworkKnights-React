'use client' ;
import "bootstrap/dist/css/bootstrap.min.css";
import React, {useState, useEffect} from "react";
import { Container, Row, Col } from 'react-bootstrap';
import CategoryCard from "../components/CategoryCard";

function Categorias() {
    //const apiURL = 'https://rodi-duran-laravel-79zb-h08vqyo8z-network-knights.vercel.app/rest';
    const apiURL = 'http://127.0.0.1:8000/rest';
    const [categories, setCategories] = useState();

    const getCategories = async () => {
        const response = await fetch(`${apiURL}/categories`);
        setCategories(await response.json());
    }

    useEffect(() => {
        getCategories();
    },[]);

  return(
    <Container>
        <title>Categorias</title>
    <Row>
    {categories?.map((category) => (
        <Col key={category.name} md={4} className="mt-4">
            <CategoryCard 
                name={category.name}
            />
        </Col>
    ))}
    </Row>
        <Row className="mt-4">
            <hr className="my-4" />
        </Row>
    </Container>
  )
}

export default Categorias