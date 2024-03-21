import type { Meta, StoryObj } from "@storybook/react";
import { TodoList } from ".";

const meta = {
  title: "TodoList",
  component: TodoList,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof TodoList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    todos: [
      {
        id: 1,
        title: "title1",
        description: "description1",
        isCompleted: false,
      },
      {
        id: 2,
        title: "title2",
        description: "description2",
        isCompleted: false,
      },
    ],
  },
};
