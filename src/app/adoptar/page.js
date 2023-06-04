'use client' ;

import Form from 'react-bootstrap/Form';
import OrderForm from "../components/OrderForm";
import * as React from 'react';
import useLocation from 'react-router-dom';


function Adoptar() {
  const apiURL = 'https://rodi-duran-laravel-79zb-hhxw14sen-network-knights.vercel.app/rest';
  const location = useLocation();
  const petId = location.state?.petId;
    console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"+petId);
    return(
        <OrderForm >
           

        </OrderForm>
      )
}

export default Adoptar;