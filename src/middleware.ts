import { NextRequest, NextResponse } from 'next/server';

const protectedRouteRegex = /^\/app/; // Matches any path starting with /app

export default function middleware(req: NextRequest) {
  const verify = req.cookies.get('jwt');
  const url = req.url;

  if (!verify && protectedRouteRegex.test(req.nextUrl.pathname)) {
    return NextResponse.redirect('http://localhost:3000/login');
  }

  if (verify && url === 'http://localhost:3000/login') {
    return NextResponse.redirect('http://localhost:3000/app');
  }

  if (verify && url === 'http://localhost:3000/signup') {
    return NextResponse.redirect('http://localhost:3000/app');
  }
}
