import { Button } from "~/components/ui/button";
import { getAllTodos } from "~/utils/data";

export default async function Page() {
  const todos = await getAllTodos();

  return (
    <div className="m-8">
      <h1 className="text-xl font-bold">Todo一覧</h1>
      <form
        action={async () => {
          "use server";
          await fetch("http://localhost:3000/api/todo?id=2", {
            method: "DELETE",
          });
        }}
      >
        <Button type="submit">削除</Button>
      </form>
      <ul className="mt-8">
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}
