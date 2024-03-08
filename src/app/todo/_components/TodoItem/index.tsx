import { Button } from "~/components/ui/button";
import { TableCell, TableRow } from "~/components/ui/table";
import { Todo } from "~/utils/data";

type Props = {
  todo: Todo;
};

export const TodoItem = ({ todo }: Props) => {
  return (
    <TableRow key={todo.id}>
      <TableCell className="font-medium">03/08</TableCell>
      <TableCell className="">{todo.title}</TableCell>
      <TableCell>
        <Button>削除</Button>
      </TableCell>
    </TableRow>
  );
};
