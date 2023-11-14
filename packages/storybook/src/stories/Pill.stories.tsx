import type { Meta, StoryObj } from "@storybook/react";
import { Pill, pillShapes } from "@us-gov-cdc/cdc-react";
import { pillVariations } from "@us-gov-cdc/cdc-react/src/components";

const meta: Meta<typeof Pill> = {
  title: "Components/Pill",
  tags: ["autodocs"],
  component: Pill,
  argTypes: {
    shape: {
      control: { type: "radio" },
      options: [...pillShapes],
    },
    variation: {
      control: { type: "radio" },
      options: [...pillVariations],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Pill>;

export const example: Story = {
  args: {
    label: "This is a pill",
    shape: "slot",
    variation: "default",
  },
};

export const togglable: Story = {
  args: {
    label: "Click Me!",
    shape: "slot",
    variation: "toggle",
    onClick: () => {},
  },
};
