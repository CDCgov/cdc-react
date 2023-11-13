import type { Meta, StoryObj } from "@storybook/react";
import { Pill, pillShapes } from "@us-gov-cdc/cdc-react";

const meta: Meta<typeof Pill> = {
  title: "Components/Pill",
  tags: ["autodocs"],
  component: Pill,
  argTypes: {
    shape: {
      control: { type: "radio" },
      options: [...pillShapes],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Pill>;

export const example: Story = {
  args: {
    label: "This is a pill",
    shape: "slot",
    togglable: false,
  },
};

export const togglable: Story = {
  args: {
    label: "This is a selectable pill",
    shape: "slot",
    togglable: true,
  },
};
