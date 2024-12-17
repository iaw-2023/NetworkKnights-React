import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-light py-3 fixed-bottom">
      <Container className="text-center">
        <p className="mb-0">© 2024 Mascotas en Adopción. Todos los derechos reservados.</p>
      </Container>
    </footer>
  );
};

export default Footer;