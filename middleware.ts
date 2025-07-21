import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const shortlinks = {
  spotify: 'https://open.spotify.com/user/70itmne002vph0cs64cg4ljhk?si=4937f204e62a4f35',
  github: 'https://github.com/ahasdemir',
};

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const shortlink = url.pathname.slice(1); // Remove leading slash

  const destination = shortlinks[shortlink];

  if (destination) {
    return NextResponse.redirect(destination);
  }

  return NextResponse.next(); // Continue to the next handler if no match
}

export const config = {
  matcher: '/:path*', // Apply middleware to all paths
};
