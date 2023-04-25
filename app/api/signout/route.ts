import { NextRequest, NextResponse } from "next/server";
import { serialize } from "cookie";

export async function POST(request: Request, res) {
  console.log(res);
  return new Response("test coockie", {
    status: 200,
    headers: {
      "Set-Cookie": serialize(process.env.COOKIE_NAME, "", {
        httpOnly: true,
        path: "/",
        maxAge: 60 * 60 * 24 * 7,
      }),
    },
  });
}
