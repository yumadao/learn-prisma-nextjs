import type { Meta, StoryObj } from "@storybook/react";
import { TodoLogo } from ".";

const meta = {
  title: "TodoLogo",
  component: TodoLogo,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof TodoLogo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
