import { getAccessToken } from '@auth0/nextjs-auth0';
import { useUser } from "@auth0/nextjs-auth0/client";

export async function GET(req, {params}) {
  try {
    const { accessToken } = await getAccessToken();

    //const { searchParams } = new URL(req.url);
    //const email = searchParams.get('email');
    console.log('email: GET-ORDERS');
    console.log(params.email);

    const res = await fetch(`https://rodi-duran-laravel-79zb-git-main-network-knights.vercel.app/rest/orders/${params.email}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        Accept: 'application/json',
      },
    });

    const data = await res.json();
    return new Response(JSON.stringify(data), { status: res.status });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
