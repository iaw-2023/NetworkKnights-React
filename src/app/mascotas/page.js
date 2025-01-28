'use client' ;
import "bootstrap/dist/css/bootstrap.min.css";
import React, {useState, useEffect} from "react";
import { Container, Row, Col } from 'react-bootstrap';
import PetCard from "../components/PetCard";

function Mascotas() {
    //const apiURL = 'https://rodi-duran-laravel-79zb-h08vqyo8z-network-knights.vercel.app/rest';
    const apiURL = 'http://127.0.0.1:8000/rest';
    
    const [pets, setPets] = useState();

    const getPets = async () => {
        const response = await fetch(`${apiURL}/pets`);
        setPets(await response.json());
    }

    useEffect(() => {
        getPets();
    },[]);

    return(
        <Container>
            <Row>
                {pets?.map((pet => (
                    <Col key={pet.id}md={4} className="mt-4">
                        <PetCard 
                            name={pet.name}
                            sex = {pet.sex}
                            category = {pet.category_name}
                            image = {pet.image}
                            id = {pet.id}
                        />
                    </Col>
                )))}
            </Row>
            <Row className="mt-4">
                <hr className="my-4" />
            </Row>
        </Container>
    )
}

export default Mascotas