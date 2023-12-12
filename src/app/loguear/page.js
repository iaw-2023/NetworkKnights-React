'use client' ;
import LoginForm from "../components/LoginForm";

function Loguear() {
  const apiURL ='rodi-duran-laravel-79zb-git-autenticacion-network-knights.vercel.app/rest';
  const handleFormSubmit = async (formData) => {
    try {
      const response = await fetch(`${apiURL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      // Aquí puedes manejar la respuesta de la API
      console.log(data);
      console.log("Inicio de sesión exitoso");
    } catch (error) {
      // Aquí puedes manejar los errores de la solicitud
      console.error(error);
    }
    console.log("Datpooooooooooooooooooooos");
    console.log(formData);
  };

  return (
    <LoginForm onFormSubmit={handleFormSubmit} />
  );
}

export default Loguear;

