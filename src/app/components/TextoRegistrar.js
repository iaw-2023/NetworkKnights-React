import React from "react";
import { Container } from "react-bootstrap";

const TextoRegistrar = () => {
  return (
    <Container className="text-center mt-3">
      <h1 className="display-5 fw-bold text-dark">¡Registrate para poder adoptar!</h1>
      <p className="lead text-muted">
        Cambiale la vida a un animalito.
      </p>
    </Container>
  );
};

export default TextoRegistrar;