'use client' ;
import "bootstrap/dist/css/bootstrap.min.css";
import React, {useState, useEffect} from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PetCard from "../components/PetCard";

function Mascotas() {
    const apiURL = 'https://rodi-duran-laravel-79zb.vercel.app/rest';
    const [pets, setPets] = useState();

    const getPets = async () => {
        const response = await fetch(`${apiURL}/pets`);
        setPets(await response.json());
    }

    useEffect(() => {
        getPets();
    },[]);

    return(
        <Row>
            {pets?.map((pet => (
                <Col md={4} className="mt-4">
                    <PetCard 
                        name={pet.name}
                        sex = {pet.sex}
                        category = {pet.category_name}
                        image = {pet.image}
                    />
                </Col>
            )))}
            
        </Row>
    )
}

export default Mascotas