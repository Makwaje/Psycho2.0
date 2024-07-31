import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { email, password } = await request.json();

  // 1. get the data from the API
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

  // if user does not exist or any error happened, just return the response as it as
  // with out setting a cookie!

  if (res.status !== 200) {
    const response = await res.json();
    return new NextResponse(JSON.stringify(response));
  }

  console.log(res);

  // extract the [set-cookie] string

  const serialized = `${res.headers.getSetCookie().at(0)}`;

  // will look like this
  //jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjY5MThkY2U3M2MzYTUwNDkwYmE2MGMyIiwiaWF0IjoxNzIwOTA0NzUwLCJleHAiOjE3MjM0OTY3NTB9.vH8VKoLR73i73N0uS-yD3K3NHRtfiFsMpZGC5h29lnA; Max-Age=2592000; Path=/; Expires=Mon, 12 Aug 2024 21:05:50 GMT; HttpOnly; SameSite=Strict

  const response = await res.json();

  // POST back the same response BUT add headers options to set the cookie using the {serialized}
  return new NextResponse(JSON.stringify(response), {
    headers: { 'set-cookie': serialized },
  });
}
