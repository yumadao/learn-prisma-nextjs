import { NextResponse } from "next/server";

export async function GET(req: Request, res: NextResponse) {
  const id = parseInt(req.url.split("/todo/")[1]);
  const todo = await prisma.todo.findFirst({ where: { id } });
  return NextResponse.json(todo);
}

export async function PUT(req: Request, res: NextResponse) {
  const id = parseInt(req.url.split("/todo/")[1]);
  const body = await req.json();
  const todo = await prisma.todo.update({
    where: { id },
    data: { title: body.title, description: body.description },
  });
  return NextResponse.json(todo);
}

export async function DELETE(req: Request, res: NextResponse) {
  const id = parseInt(req.url.split("/todo/")[1]);
  const todo = await prisma.todo.delete({ where: { id } });
  return NextResponse.json(todo);
}
