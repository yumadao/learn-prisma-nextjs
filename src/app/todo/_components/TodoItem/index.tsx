import { revalidateTag } from "next/cache";
import { Button } from "~/components/ui/button";
import { TableCell, TableRow } from "~/components/ui/table";
import { Todo, deleteTodo } from "~/utils/data";

type Props = {
  todo: Todo;
};

export const TodoItem = ({ todo }: Props) => {
  return (
    <TableRow key={todo.id}>
      <TableCell className="font-medium">03/08</TableCell>
      <TableCell className="">{todo.title}</TableCell>
      <TableCell>
        <form
          action={async (formData) => {
            "use server";
            const id = formData.get("id");
            const res = await deleteTodo(Number(id));
            revalidateTag("todos");
            console.log({ res });
          }}
        >
          <Button type="submit" name="id" value={todo.id}>
            削除
          </Button>
        </form>
      </TableCell>
    </TableRow>
  );
};
