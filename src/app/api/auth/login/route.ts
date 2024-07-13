import { TLoginSchema } from '@/lib/types';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { email, password } = await request.json();

  const res = await fetch(`${process.env.BASE_URL}/users/login`, {
    method: 'POST',
    credentials: 'include',
    body: JSON.stringify({
      email: email,
      password: password,
    }),
    headers: {
      'Content-type': 'application/json',
    },
  });

  const response = await res.json();

  console.log(response);

  return new NextResponse(JSON.stringify(response));
}
