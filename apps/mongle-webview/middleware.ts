import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|auth|images|socket.io|not-found).*)',
  ],
};

export async function middleware(request: NextRequest) {
  if (process.env.NODE_ENV === 'development') {
    return NextResponse.next();
  }

  const cookieStore = cookies();
  const cookieValue = cookieStore.get('AUTH')?.value;

  // if (!cookieValue) {
  //   return NextResponse.redirect(new URL('/error', request.url));
  // }
  return NextResponse.next();
}
