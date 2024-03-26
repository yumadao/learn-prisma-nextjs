import { Button } from "~/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { addTodo } from "~/utils/data";
import { revalidateTag } from "next/cache";
import { TodoLogo } from "../todoLogo";

export const Header = () => {
  return (
    <div className="flex flex-row justify-between items-center h-20 text-white bg-slate-800">
      <div className="ml-5">
        <TodoLogo />
      </div>
      <div className="mr-5">
        <SideMenu />
      </div>
    </div>
  );
};

function SideMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          className="rounded-full bg-black outline-white"
        >
          +
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col items-center gap-10">
        <SheetHeader>
          <SheetTitle>Add todo</SheetTitle>
          <SheetDescription>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            Make writes to your todo here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <form
          action={async (formData) => {
            "use server";
            const title = formData.get("title") as string;
            const description = formData.get("description") as string;
            await addTodo({ title, description });
            revalidateTag("todos");
          }}
          className="flex flex-col gap-5 w-5/6 items-center"
        >
          <Input type="text" name="title" placeholder="タイトル" />
          <Textarea
            name="description"
            placeholder="詳細"
            className="h-80 mb-auto"
          />
          <SheetFooter>
            <SheetClose asChild>
              <Button type="submit">Save</Button>
            </SheetClose>
          </SheetFooter>
        </form>
      </SheetContent>
    </Sheet>
  );
}
