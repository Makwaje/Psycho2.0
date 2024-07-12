'use server';

import { TLoginSchema, TSignUpSchema } from './types';

export async function signUp(formData: TSignUpSchema) {
  const req = await fetch(`${process.env.BASE_URL}/users/signup`, {
    method: 'POST',
    body: JSON.stringify({
      name: formData.name,
      email: formData.email,
      password: formData.password,
    }),
    headers: {
      'Content-type': 'application/json',
    },
  });

  return req.json();
}

export async function logIn(formData: TLoginSchema) {
  const req = await fetch(`${process.env.BASE_URL}/users/login`, {
    method: 'POST',
    body: JSON.stringify({
      email: formData.email,
      password: formData.password,
    }),
    headers: {
      'Content-type': 'application/json',
    },
  });

  return req.json();
}
