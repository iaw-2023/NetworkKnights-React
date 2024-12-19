import React from "react";
import { Container } from "react-bootstrap";

const TextoLoguear = () => {
  return (
    <Container className="text-center mt-3">
      <h1 className="display-5 fw-bold text-dark">Iniciar Sesión</h1>
      <p className="lead text-muted">
        Aquí empieza tu camino para adoptar a tu próxima mascota.
      </p>
    </Container>
  );
};

export default TextoLoguear;