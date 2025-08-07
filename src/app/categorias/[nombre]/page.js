'use client' ;
import "bootstrap/dist/css/bootstrap.min.css";
import React, {useState, useEffect} from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PetCard from "../../components/PetCard";

function CategoriaNombre({params}) {
    //const apiURL = 'https://rodi-duran-laravel-79zb-hhxw14sen-network-knights.vercel.app/rest';
    const apiURL = 'https://rodi-duran-laravel-79zb-git-main-network-knights.vercel.app/rest';
    const [pets, setPets] = useState();

    const getPets = async () => {
        const response = await fetch(`${apiURL}/pets/category/`+params.nombre);
        setPets(await response.json());
    }
    
    useEffect(() => {
        getPets();
    }, [getPets, params.nombre]); 

    return(
        <Row>
            {pets?.map((pet => (
                <Col key={pet.id}md={4} className="mt-4">
                    <PetCard 
                        name={pet.name}
                        sex = {pet.sex}
                        id= {pet.id}
                        category = {pet.category_name}
                        image = {pet.image}
                    />
                </Col>
            )))}
        </Row>
    )
}

export default CategoriaNombre;