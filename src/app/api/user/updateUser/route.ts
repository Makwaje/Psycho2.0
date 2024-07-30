import axios from 'axios';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
export async function PATCH(request: Request) {
  const { name } = await request.json();
  // 1. get the cookie from the browser
  const cookie = cookies().get('jwt')?.value;

  // 2. request and get the data from the API
  const { data } = await axios.patch(
    `${process.env.BASE_URL}/users/update-me`,
    { name },
    {
      withCredentials: true,
      headers: { Authorization: `Bearer ${cookie}` },
    }
  );

  return new NextResponse(JSON.stringify(data));
}
