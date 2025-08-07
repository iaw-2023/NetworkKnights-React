import { getAccessToken } from '@auth0/nextjs-auth0';

export async function POST(req) {
  try {
  const { accessToken } = await getAccessToken();
  const payload = await req.json();

  const res = await fetch('https://rodi-duran-laravel-79zb-git-main-network-knights.vercel.app/rest/orders', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(payload),
  });

  const text = await res.text();  // <-- Leé como texto primero
  console.log('Respuesta del backend:', text);

  try {
    const data = JSON.parse(text);  // <-- Intentá parsear como JSON
    console.log('JSON parseado correctamente:', data);
    return new Response(JSON.stringify(data), { status: res.status });
  } catch (parseError) {
    console.error('Error al parsear JSON:', parseError.message);
    return new Response(JSON.stringify({ error: 'Respuesta del backend no es JSON válido' }), { status: 500 });
  }

} catch (error) {
  console.error('Error general:', error);
  return new Response(JSON.stringify({ error: error.message }), { status: 500 });
}
}
