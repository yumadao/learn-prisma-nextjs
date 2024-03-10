import { getAllTodos } from "~/utils/data";
import { TodoList } from "./_components/TodoList";

export const dynamic = "force-dynamic";

export default async function TodoPage() {
  const todos = await getAllTodos();

  return (
    <div className="m-8">
      <h1 className="text-xl font-bold">Todo一覧</h1>
      <TodoList todos={todos} />
    </div>
  );
}
