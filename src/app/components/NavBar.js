'use client';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavLink from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Link from "next/link";
import Button from 'react-bootstrap/Button';

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>
        <img
              src='https://images.vexels.com/media/users/3/201898/isolated/preview/55be9a1a39abff39bc3596e8ddd224cd-trazo-de-huella-de-perro-azul.png'
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
        </Navbar.Brand>
        <Link href="/" style={{ textDecoration: 'none' }}>
          <Navbar.Brand>Mascotas en Adopción</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
         
          <Nav className="me-auto">
          <Link href="/categorias" style={{ textDecoration: 'none' }}>
            <Navbar.Brand >Categorias</Navbar.Brand>
          </Link>

          <Link href="/mascotas" style={{ textDecoration: 'none' }}>
            <Navbar.Brand >Mascotas</Navbar.Brand>
          </Link>

          
          
          <Nav className=" justify-content-end ms-auto">
            <Button variant="secondary">
              <Link href={""} style={{ textDecoration: 'none' }} className='link-dark'>Iniciar sesión</Link>
            </Button>
            <Button variant="info">
              <Link href={"/registrar/"} style={{ textDecoration: 'none' }} className='link-dark'>Registrarse</Link>
            </Button>
          </Nav>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;