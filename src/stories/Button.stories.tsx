import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../components";

const meta = {
  title: "Components/Button",
  component: Button,
  argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    text: "Click me!",
  },
};
