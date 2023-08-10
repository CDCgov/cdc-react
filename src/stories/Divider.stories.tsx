import { Meta, StoryObj } from "@storybook/react";
import { Divider } from "../components/Divider/Divider";

const meta: Meta<typeof Divider> = {
  title: "Components/Divider",
  component: Divider,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Example: Story = {
  args: {},
};
