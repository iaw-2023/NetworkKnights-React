import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Link from "next/link";
import Button from 'react-bootstrap/Button';
import { useAuth0 } from '@auth0/auth0-react';
import React, {useState, useEffect} from "react";
import { useUser } from '@auth0/nextjs-auth0/client';

function NavBar() {
    const { user, isLoading } = useUser();
  
    if (isLoading) {
      // Mostrar un indicador de carga mientras Auth0 verifica la sesión
      return <div>Cargando...</div>;
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
              <Navbar.Brand>Categorias</Navbar.Brand>
            </Link>

            <Link href="/mascotas" style={{ textDecoration: 'none' }}>
              <Navbar.Brand>Mascotas</Navbar.Brand>
            </Link>

            <Link href="/donar" style={{ textDecoration: 'none' }}>
              <Navbar.Brand>Donación</Navbar.Brand>
            </Link>
          </Nav>

          <Nav className="justify-content-end ms-auto">
            <div>
            {!user ? (
            <Button variant="outline-primary" className="me-2">
              <Link href={"/api/auth/login"} style={{ textDecoration: 'none' }} className='link-primary'>Iniciar sesión</Link>
            </Button>
            ) : (
            <div className="d-flex gap-2 flex-grow-1 justify-content-end">
            <Button variant="outline-dark">
              <Link href={"/perfil/"} style={{ textDecoration: 'none' }} className='link-dark'>Mi Perfil</Link>
            </Button>
            <Button variant="outline-dark">
              <Link href={"/api/auth/logout"} style={{ textDecoration: 'none' }} className='link-dark'>Cerrar Sesion</Link>
            </Button>
            </div>
            )}
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    
  );
}

export default NavBar;
