import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

import { env } from "~/env";

const JWT_SECRET = new TextEncoder().encode(env.JWT_SECRET);
const COOKIE_NAME = "session-token";

export interface SessionPayload {
  userId: string;
  email: string;
  [key: string]: string;
}

export async function createSession(payload: SessionPayload): Promise<string> {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days

  const session = await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(expiresAt)
    .sign(JWT_SECRET);

  try {
    // Try to set cookie via next/headers (works in Server Components and Route Handlers)
    const cookieStore = await cookies();
    cookieStore.set(COOKIE_NAME, session, {
      httpOnly: true,
      secure: env.NODE_ENV === "production",
      expires: expiresAt,
      sameSite: "lax",
      path: "/",
    });
    console.log("[auth] Session cookie set successfully");
  } catch {
    console.log(
      "[auth] Note: Setting cookie via next/headers failed (may be in tRPC context), token is returned for client-side handling",
    );
  }

  return session;
}

export async function getSession(): Promise<SessionPayload | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;

  if (!token) {
    return null;
  }

  try {
    const { payload } = await jwtVerify(token, JWT_SECRET);
    return payload as unknown as SessionPayload;
  } catch {
    return null;
  }
}

export async function deleteSession() {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_NAME);
}
