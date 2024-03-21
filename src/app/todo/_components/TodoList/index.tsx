import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import { Todo } from "~/utils/data";
import { TodoItem } from "../todoItem";

type Props = {
  todos: Todo[];
};

export const TodoList = ({ todos }: Props) => {
  return (
    <Table>
      <TableCaption>A list of your recent todos.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">日付</TableHead>
          <TableHead>タイトル</TableHead>
          {/* 削除ボタンの分 */}
          <TableHead />
        </TableRow>
      </TableHeader>
      <TableBody>
        {todos.map((todo) => {
          return <TodoItem key={todo.id} todo={todo} />;
        })}
      </TableBody>
    </Table>
  );
};
