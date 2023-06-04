'use client' ;
import "bootstrap/dist/css/bootstrap.min.css";
import React, {useState, useEffect} from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CategoryCard from "../components/CategoryCard";

function Categorias() {
    const apiURL = 'https://rodi-duran-laravel-79zb-h08vqyo8z-network-knights.vercel.app/rest';
    const [categories, setCategories] = useState();

    const getCategories = async () => {
        const response = await fetch(`${apiURL}/categories`);
        setCategories(await response.json());
    }

    useEffect(() => {
        getCategories();
    },[]);

  return(
    <Row>
    {categories?.map((category) => (
        <Col key={category.id} md={4} className="mt-4">
            <CategoryCard 
                name={category.name}
            />
        </Col>
    ))}
    </Row>

  )
}

export default Categorias