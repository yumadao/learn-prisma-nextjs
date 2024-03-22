"use server";

import { handleFailed, handleSuccess } from "./fetcher";

const API_BASE_URL = "http://localhost:3000/api/todo";

export type Todo = {
  id: number;
  title: string;
  description: string;
  isCompleted: boolean;
};

export type PostTodoRequest = Pick<Todo, "title" | "description">;

export const getAllTodos = async (): Promise<Todo[]> => {
  return fetch(`${API_BASE_URL}`, {
    method: "GET",
    next: { tags: ["todos"] },
  })
    .then((res) => handleSuccess<Todo[]>(res))
    .catch(handleFailed);
};

export const getTodoById = async (id: number): Promise<Todo> => {
  return fetch(`${API_BASE_URL}/${id}`, { method: "GET" })
    .then((res) => handleSuccess<Todo>(res))
    .catch(handleFailed);
};

export const addTodo = async (req: PostTodoRequest): Promise<Todo> => {
  return fetch(`${API_BASE_URL}`, {
    method: "POST",
    body: JSON.stringify(req),
  })
    .then((res) => handleSuccess<Todo>(res))
    .catch(handleFailed);
};

export const deleteTodo = async (id: number): Promise<Todo> => {
  return fetch(`${API_BASE_URL}/${id}`, { method: "DELETE" })
    .then((res) => handleSuccess<Todo>(res))
    .catch(handleFailed);
};
