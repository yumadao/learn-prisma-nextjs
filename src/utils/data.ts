"use server";

const API_BASE_URL = "http://localhost:3000/api/todo";

export type Todo = {
  id: number;
  title: string;
  description: string;
  isCompleted: boolean;
};

export type PostTodoRequest = Pick<Todo, "title" | "description">;

export const getAllTodos = async (): Promise<Todo[]> => {
  const res = await fetch(`${API_BASE_URL}`, {
    method: "GET",
    next: { tags: ["todos"] },
  });
  const data: Todo[] = await res.json();
  return data;
};

export const getTodoById = async (id: number): Promise<Todo> => {
  const res = await fetch(`${API_BASE_URL}/${id}`, { method: "GET" });
  const data: Todo = await res.json();
  return data;
};

export const addTodo = async (req: PostTodoRequest): Promise<Todo> => {
  const res = await fetch(`${API_BASE_URL}`, {
    method: "POST",
    body: JSON.stringify(req),
  });
  const data: Todo = await res.json();
  return data;
};

export const deleteTodo = async (id: number): Promise<Todo> => {
  const res = await fetch(`${API_BASE_URL}/${id}`, { method: "DELETE" });
  const data: Todo = await res.json();
  return data;
};
