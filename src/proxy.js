import { NextResponse } from 'next/server'

// path to your Better Auth server instance
import { headers } from "next/headers";
import { auth } from './app/lib/auth';


// This function can be marked `async` if using `await` inside
export async function proxy(request) {
    const session = await auth.api.getSession({
    headers: await headers() // you need to pass the headers object.
})
const user = session?.user
  if(!user){
    return NextResponse.redirect(new URL('/sign-in', request.url))
  }
}

export const config = {
  matcher: ['/profile','/detailsPage/:path*'],
}