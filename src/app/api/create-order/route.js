import { getAccessToken } from '@auth0/nextjs-auth0';

export async function POST(req) {
  try {
    const { accessToken } = await getAccessToken();

    const payload = await req.json();

    const res = await fetch('http://127.0.0.1:8000/rest/orders', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const data = await res.json();
    return new Response(JSON.stringify(data), { status: res.status });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
