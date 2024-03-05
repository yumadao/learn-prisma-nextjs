import { NextRequest, NextResponse } from "next/server";
import prisma from "~/lib/prisma";

export async function GET() {
  const todos = await prisma.todo.findMany();
  return NextResponse.json(todos);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const todo = await prisma.todo.create({
    data: { title: body.title, description: body.description },
  });
  return NextResponse.json(todo);
}

export async function DELETE(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const id = searchParams.get("id");
  const todo = await prisma.todo.delete({
    where: {
      id: Number(id),
    },
  });
  return NextResponse.json(todo);
}
