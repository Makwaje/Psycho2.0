import axios from 'axios';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const cookie = cookies().get('jwt')?.value;
  const res = await fetch(`${process.env.BASE_URL}/users/logout`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-type': 'application/json',
      authorization: `Bearer ${cookie}`,
    },
  });

  const response = await res.json();

  return new NextResponse(JSON.stringify(response), {
    headers: {
      'set-cookie':
        'jwt=deleted; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT',
    },
  });
}
