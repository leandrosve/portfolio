import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

let locales = ['en', 'es'];
let headers = { 'accept-language': 'en-US,en;q=0.5' };
let defaultLocale = 'en';

// Get the preferred locale, similar to the above or using a library
function getLocale() {
  let cookieLocale = cookies().get('NEXT_LOCALE');
  if (cookieLocale && locales.some((l) => l == cookieLocale?.value)) {
    return cookieLocale.value;
  }
  let languages = new Negotiator({ headers }).languages();
  return match(languages, locales, defaultLocale) ?? 'en'; // -> 'en-US'
}

export default function middleware(request: NextRequest) {

  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;
  const pathnameLocale = locales.find((locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`);
  if (pathnameLocale) {
    if (pathname !== `/${pathnameLocale}/home`) {
      request.nextUrl.pathname = `/${pathnameLocale}/home`;
      return Response.redirect(request.nextUrl);
    }

    return;
  }

  // Redirect if there is no locale
  const locale = getLocale();
  request.nextUrl.pathname = `/${locale}${pathname}`;

  // e.g. incoming request is /products
  // The new URL is now /en-US/products

  if (pathname !== `/${locale}/home`) {
    request.nextUrl.pathname = `/${locale}/home}`;
    return Response.redirect(request.nextUrl);
  }

  return Response.redirect(request.nextUrl);
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|images|documents|favicon.ico).*)'],
};
