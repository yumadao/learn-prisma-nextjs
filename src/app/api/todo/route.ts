import { NextResponse } from "next/server";
import prisma from "~/lib/prisma";

export async function GET(req: Request, res: NextResponse) {
  const todos = await prisma.todo.findMany();
  return NextResponse.json(todos);
}

export async function POST(req: Request, res: NextResponse) {
  const body = await req.json();
  const todo = await prisma.todo.create({
    data: { title: body.title, description: body.description },
  });
  return NextResponse.json(todo);
}
