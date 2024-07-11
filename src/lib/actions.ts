'use server';

import { redirect } from 'next/navigation';
import { TLoginSchema, TSignUpSchema } from './types';

export async function signUp(formData: TSignUpSchema) {
  const request = await fetch(`${process.env.LOCAL_URL}/signup`, {
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

  const reqData = await request.json();
  console.log(reqData);

  if (reqData.status === 'success') {
    redirect('/login');
  } else {
    throw new Error('signUp failed');
  }
}

export async function logIn(formData: TLoginSchema) {
  const request = await fetch(`${process.env.LOCAL_URL}/login`, {
    method: 'POST',
    body: JSON.stringify({
      email: formData.email,
      password: formData.password,
    }),
    headers: {
      'Content-type': 'application/json',
    },
  });
  const reqData = await request.json();
  console.log(reqData);

  if (reqData.status === 'success') {
    redirect('/app');
  } else {
    throw new Error('login failed');
  }
}