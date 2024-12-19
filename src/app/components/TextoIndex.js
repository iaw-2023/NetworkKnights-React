import React from "react";
import { Container } from "react-bootstrap";

const TextoIndex = () => {
  return (
    <Container className="text-center mt-3">
      <h1 className="display-3 fw-bold text-dark">¡Bienvenido a nuestra plataforma!</h1>
      <p className="lead text-muted">
        Explora, encuentra y adopta a tu nuevo mejor amigo con tan solo unos clics.
      </p>
    </Container>
  );
};

export default TextoIndex;