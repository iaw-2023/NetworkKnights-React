import { useState } from 'react';
import { Col, Row, Form, Button, Image } from 'react-bootstrap';

import React, { useEffect, useRef } from "react";
import { initMercadoPago } from "@mercadopago/sdk-react";

const CardPayment = ({ publicKey, preferenceId }) => {
  const brickContainer = useRef(null);

  useEffect(() => {
    // Inicializa Mercado Pago con tu public key
    initMercadoPago('TEST-6b3952a1-158a-46b6-8524-ddf57654222e');

    // Configuración del Brick
    const renderCardPaymentBrick = async () => {
      const mp = new window.MercadoPago('TEST-6b3952a1-158a-46b6-8524-ddf57654222e');

      const bricksBuilder = mp.bricks();

      await bricksBuilder.create("cardPayment", "cardPaymentBrick_container", {
        initialization: {
          amount: 100, // Cambia por el monto real
          preferenceId, // ID de la preferencia
        },
        callbacks: {
          onSubmit: (cardData) => {
            console.log("Datos enviados: ", cardData);
            // Aquí puedes enviar los datos a tu backend
          },
          onError: (error) => {
            console.error("Error: ", error);
          },
        },
      });
    };

    if (brickContainer.current) {
      renderCardPaymentBrick();
    }
  }, [publicKey, preferenceId]);

  return (
    <div>
      <div ref={brickContainer} id="cardPaymentBrick_container"></div>
    </div>
  );
};

export default CardPayment;
