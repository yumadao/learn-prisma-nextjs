import type { Meta, StoryObj } from "@storybook/react";
import { TodoItem } from ".";

const meta = {
  title: "TodoItem",
  component: TodoItem,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof TodoItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    todo: {
      id: 1,
      title: "title",
      description: "description",
      isCompleted: false,
    },
  },
};
