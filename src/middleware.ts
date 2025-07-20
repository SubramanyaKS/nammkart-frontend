import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
    const token = request.cookies.get('token')?.value;
    // console.log("Token in middleware:", request.cookies);
    const { pathname } = request.nextUrl;
    
    const publicPaths = ['/login', '/signup','/about', '/','/products']; // Add your public routes here
    const isProductDetail = pathname.startsWith('/products/');

    // If the path is public, allow access
    if (publicPaths.includes(pathname) || isProductDetail) {
        return NextResponse.next();
    }

    // If there's no token and the path is not public, redirect to login
    if (!token) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    // If token exists and path is not public, allow access
    return NextResponse.next();
}

export const config = {
    matcher: ['/((?!_next|api|static|favicon.ico).*)'], // Apply middleware to all paths except these
};