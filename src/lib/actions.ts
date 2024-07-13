'use server';

import { cookies } from 'next/headers';
import { TLoginSchema, TSignUpSchema } from './types';

export async function signUp(formData: TSignUpSchema) {
  const res = await fetch(`${process.env.BASE_URL}/users/signup`, {
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
  console.log(res);
  // getAndSetCookies(res);

  return res.json();
}

export async function logIn(formData: TLoginSchema) {
  const res = await fetch(`${process.env.BASE_URL}/users/login`, {
    method: 'POST',
    body: JSON.stringify({
      email: formData.email,
      password: formData.password,
    }),
    headers: {
      'Content-type': 'application/json',
    },
  });

  console.log(res);
  // getAndSetCookies(res);

  return res.json();
}

// function parseCookieString(cookieString: []) {
//   // Split the string by semicolons to separate cookies
//   const cookies = cookieString.split(';');

//   // Create an empty object to store cookie data
//   const cookieObj = {};

//   for (const cookie of cookies) {
//     // Split each cookie by the equals sign to separate key and value
//     const [key, value] = cookie.trim().split('=');

//     // Handle the special case of the JWT cookie
//     if (key === 'jwt') {
//       // Split the value further to separate token, expiration details
//       const [token, ...otherParts] = value.split(';');
//       cookieObj[key] = token;

//       // Parse expiration details (optional)
//       if (otherParts.length) {
//         const expirationObj = {};
//         for (const part of otherParts) {
//           const [subKey, subValue] = part.trim().split('=');
//           expirationObj[subKey] = subValue;
//         }
//         cookieObj.expiration = expirationObj;
//       }
//     } else {
//       // For other cookies, simply store key-value pair
//       cookieObj[key] = value;
//     }
//   }

//   return cookieObj;
// }

// function getAndSetCookies(res: Response) {
//   const cookieString = res.headers.getSetCookie() as [];

//   const { jwt, Path } = parseCookieString(cookieString[0]);
//   console.log(jwt, Path);

//   const now = new Date();
//   const current = new Date(now.getFullYear(), now.getMonth() + 1);

//   cookies().set('jwt', jwt, {
//     expires: current,
//     path: Path,
//     httpOnly: true,
//   });
// }
