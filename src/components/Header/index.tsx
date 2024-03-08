import React from "react";
import { Button } from "../ui/button";

export const Header = () => {
  return (
    <div className="flex flex-row justify-between items-center h-20 text-white bg-slate-800">
      <div className="ml-5">Header</div>
      <Button className="rounded-full bg-amber-100 hover:bg-amber-50 active:bg-amber-200 text-black mr-10">
        +
      </Button>
    </div>
  );
};
