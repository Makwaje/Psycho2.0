import axios from 'axios';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
export async function GET(request: Request) {
  // 1. get the cookie from the browser
  const cookie = cookies().get('jwt')?.value;

  // 2. request and get the data from the API
  const { data } = await axios.get(`${process.env.BASE_URL}/users/profile`, {
    withCredentials: true,
    headers: { Authorization: `Bearer ${cookie}` },
  });

  return new NextResponse(JSON.stringify(data));
}
