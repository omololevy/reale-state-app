import { getUserFromCookie } from "@/lib/auth";

export async function POST(req) {
  console.log("coockies", req.cookies.get("Authorization").value);
  const user = await getUserFromCookie(req.cookies);

  return new Response(JSON.stringify(user), { status: 200 });
}
