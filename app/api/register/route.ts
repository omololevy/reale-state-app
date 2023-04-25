import { NextResponse } from "next/server";

export function GET(req, res) {
  console.log(req);
  NextResponse.json({ message: "hello" });
}
export function POST(req, res) {
  console.log(req);
  NextResponse.json({ message: "hello" });
}
