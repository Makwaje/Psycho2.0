import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

const protectedRoutes = ['/app'];

export default function middleware(req: NextRequest) {
  const verify = req.cookies.get('jwt');
  const url = req.url;

  if (!verify && protectedRoutes.includes(req.nextUrl.pathname)) {
    return NextResponse.redirect('http://localhost:3000/login');
  }

  if (verify && url === 'http://localhost:3000/login') {
    return NextResponse.redirect('http://localhost:3000/app');
  }

  if (verify && url === 'http://localhost:3000/signup') {
    return NextResponse.redirect('http://localhost:3000/app');
  }
}
