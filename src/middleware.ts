import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
    console.log('MiddleWare')

    if (!request.cookies.get('token')) {
        return NextResponse.redirect(new URL('/auth/login', request.url));
    }
    return NextResponse.next();
}

export const config = {
    matcher: '/'
}