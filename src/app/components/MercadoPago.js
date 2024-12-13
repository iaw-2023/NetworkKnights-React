import React, { useEffect, useRef } from "react";
import { initMercadoPago } from "@mercadopago/sdk-react";

const CardPaymentBrick = () => {
  const brickContainer = useRef(null);

  useEffect(() => {
    // Inicializa Mercado Pago con tu Public Key
    const publicKey = "TEST-6b3952a1-158a-46b6-8524-ddf57654222e"; // Sustituye por tu Public Key de Mercado Pago
    initMercadoPago(publicKey);

    // Configuración del Brick
    const renderCardPaymentBrick = async () => {
      const mp = new window.MercadoPago(publicKey);

      const bricksBuilder = mp.bricks();

      await bricksBuilder.create("cardPayment", "cardPaymentBrick_container", {
        initialization: {
          amount: 100, // Monto fijo de la transacción
        },
        callbacks: {
          onSubmit: (cardData) => {
            console.log("Datos enviados:", cardData);
            // Aquí puedes manejar la respuesta del pago directamente
          },
          onError: (error) => {
            console.error("Error:", error);
          },
        },
      });
    };

    if (brickContainer.current) {
      renderCardPaymentBrick();
    }
  }, []);

  return <div id="cardPaymentBrick_container" ref={brickContainer}></div>;
};

export default CardPaymentBrick;
