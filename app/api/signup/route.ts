import { hashPassword } from "@/lib/auth";
import { db as prisma } from "@/lib/db";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: NextApiResponse) {
  const body = await req.json();
  const { email, username, password } = body;
  console.log({ email, username, password });
  const user = await prisma.user.create({
    data: {
      email,
      username,
      password: await hashPassword(password),
      isEmailChecked: false,
    },
  });
  console.log(user);
  res;
  if (user) {
    res.statusCode = 201;

    return new Response(JSON.stringify({ ...user }), { status: 201 });
  } else {
    return NextResponse.json({ error: "failed to create user" });
  }
}

// export async function POST(request: Request) {
//   // console.log("body", request.body?.getReader());
//   let stream = request.body?.getReader();
//   console.log("stream", stream);
//   for (const chunk of stream) {
//     // Do something with each 'chunk'
//     console.log("cunk", chunk);
//   }
//   // const user = await prisma.user.create({
//   //   data: {
//   //     email,
//   //     username,
//   //     password: await hashPassword(password),
//   //     isEmailChecked: false,
//   //   },
//   // });
//   // if (user) {
//   //   NextResponse.json({ ...user, status: "success" });
//   // } else {
//   //   NextResponse.json({ status: "error" });
//   // }
// }
