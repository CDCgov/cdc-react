import type { Meta, StoryObj } from "@storybook/react";
import { Pill } from "@us-gov-cdc/cdc-react";

const meta: Meta<typeof Pill> = {
  title: "Components/Pill",
  tags: ["autodocs"],
  component: Pill,
};

export default meta;
type Story = StoryObj<typeof Pill>;

export const example: Story = {
  args: {
    text: "This is a pill",
  },
};
