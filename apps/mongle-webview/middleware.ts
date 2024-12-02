import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|auth|images|socket.io|not-found).*)',
  ],
};

export async function middleware(request: NextRequest) {
  const cookieStore = cookies();
  const cookieValue = cookieStore.get('AUTH')?.value;

  if (!cookieValue) {
    return NextResponse.redirect(
      new URL('/not-found?status=error', request.url)
    );
  }
  return NextResponse.next();
}
