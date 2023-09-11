import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { v4 as uuidv4 } from "uuid";

export function middleware(request: NextRequest) {
  const sessionId = request.cookies.get("session");

  if (!sessionId) {
    const newSessionId = uuidv4();

    // Set request headers as if session cookie was already set
    request.cookies.set("session", newSessionId);
    const newHeaders = new Headers(request.headers);
    const response = NextResponse.next({
      headers: newHeaders,
    });

    // Send session cookie to client
    response.cookies.set("session", newSessionId);

    return response;
  }

  return NextResponse.next();
}
