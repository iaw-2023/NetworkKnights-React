import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Link from "next/link";
import Button from 'react-bootstrap/Button';
import { useUser } from '@auth0/nextjs-auth0/client';
import React, { useState } from "react";

function NavBar() {
  const { user, error, isLoading } = useUser();
  const [protectedData, setProtectedData] = useState(null);

  if (isLoading) {
    return <div>Cargando...</div>;
  }
  if (error) return <p>Ocurrió un error: {error.message}</p>;

  async function fetchProtectedData() {
    try {
      const res = await fetch("/api/protected");
      const data = await res.json();
      setProtectedData(data);
    } catch (err) {
      console.error("Error al obtener datos protegidos:", err);
    }
  }

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>
          <img
            src='https://images.vexels.com/media/users/3/201898/isolated/preview/55be9a1a39abff39bc3596e8ddd224cd-trazo-de-huella-de-perro-azul.png'
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>

        <Link href="/" style={{ textDecoration: 'none' }}>
          <Navbar.Brand>Mascotas en Adopción</Navbar.Brand>
        </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link href="/categorias" style={{ textDecoration: 'none' }}>
              <Navbar.Brand>Categorías</Navbar.Brand>
            </Link>

            <Link href="/mascotas" style={{ textDecoration: 'none' }}>
              <Navbar.Brand>Mascotas</Navbar.Brand>
            </Link>

            <Link href="/donar" style={{ textDecoration: 'none' }}>
              <Navbar.Brand>Donación</Navbar.Brand>
            </Link>
          </Nav>

          <Nav className="justify-content-end ms-auto">
            {!user ? (
              <Button variant="outline-primary" className="me-2" as="a" href="/api/auth/login">
                Iniciar sesión
              </Button>
            ) : (
              <div className="d-flex gap-2 flex-grow-1 justify-content-end">
                <Button variant="outline-dark" as={Link} href="/perfil/">
                  Mi Perfil
                </Button>

                <Button variant="outline-dark" as="a" href="/api/auth/logout">
                  Cerrar sesión
                </Button>
                
        
              </div>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
