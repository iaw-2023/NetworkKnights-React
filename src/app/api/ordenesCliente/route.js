import { getAccessToken } from '@auth0/nextjs-auth0';

export async function GET(req) {
  try {
    const { accessToken } = await getAccessToken();
    const apiURL = 'http://127.0.0.1:8000/rest';

    console.log("TOKEN ENVIADO A LARAVEL:", accessToken); // Agrega este console.log

    if (!accessToken) {
        return Response.json({ error: "No se obtuvo un token válido" }, { status: 401 });
      }
  
    console.log("✅ Token obtenido correctamente:", accessToken);
        
    const laravelResponse = await fetch(`${apiURL}/orders/${email}`, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${accessToken}`,
            "Accept": "application/json",
        },
    });

    if (!laravelResponse.ok) {
        const errorText = await laravelResponse.text(); // Obtener respuesta como texto
        console.error("❌ Error en Laravel:", errorText);
        return Response.json({ error: "Error en el backend", details: errorText }, { status: 500 });
      }
  
      // Convertir respuesta de Laravel a JSON
      const data = await laravelResponse.json();
      return Response.json(data);
    } catch (error) {
      console.error("❌ Error en Next.js API:", error);
      return Response.json({ error: error.message }, { status: 500 });
    }
}
