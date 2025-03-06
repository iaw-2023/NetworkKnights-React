import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { useUser } from '@auth0/nextjs-auth0/client';

const CardPerfil = ({ usere }) => {

    const { user, error, isLoading } = useUser();

     if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>;

  return (
    <Card className="text-center">
      <Card.Header>
        <h4>Mi Perfil</h4>
      </Card.Header>
      <Card.Body>
        <Image
          src={user.picture} // Ruta de la foto del usuario
          roundedCircle
          fluid
          alt="Foto de perfil"
          className="mb-3"
        />
        <h5>{`${user.name}`}</h5>
        <p>{user.email}</p>
      </Card.Body>
    </Card>
  );
};

export default CardPerfil;