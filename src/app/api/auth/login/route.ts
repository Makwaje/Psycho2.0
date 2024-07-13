import { TLoginSchema } from '@/lib/types';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const res = await fetch(`${process.env.BASE_URL}/users/login`, {
    method: 'POST',
    credentials: 'include',
    body: JSON.stringify({
      email: request.email,
      password: request.password,
    }),
    headers: {
      'Content-type': 'application/json',
    },
  });

  console.log(res);

  const response = {
    res,
  };

  return new Response(JSON.stringify(response));
}
