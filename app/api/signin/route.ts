import { comparePasswords, createJWT } from "@/lib/auth";
import { db as prisma } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import { serialize } from "cookie";

export async function POST(request: Request, res) {
  const data = await request.json();
  const { email, password } = data;
  console.log({ email, password });
  const user = await prisma.user.findUnique({ where: { email } });
  if (user) {
    const isMatch = await comparePasswords(password, user.password);
    const jwt = await createJWT(user);
    return new Response("test coockie", {
      status: 200,
      headers: {
        "Set-Cookie": serialize(process.env.COOKIE_NAME, jwt, {
          httpOnly: true,
          path: "/",
          maxAge: 60 * 60 * 24 * 7,
        }),
      },
    });
  } else {
    return new Response("email or password is incorrect", { status: 403 });
  }
}
