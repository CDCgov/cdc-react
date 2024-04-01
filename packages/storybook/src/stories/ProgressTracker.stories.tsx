import type { Meta, StoryObj } from "@storybook/react";
import { useArgs } from "@storybook/preview-api";
import { ProgressTracker } from "@us-gov-cdc/cdc-react";

const meta: Meta<typeof ProgressTracker> = {
  title: "Components/ProgressTracker",
  tags: ["autodocs"],
  component: ProgressTracker,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ProgressTracker>;

export const Example: Story = {
  args: {
    currentAmount: 50,
    totalAmount: 100,
  },
};
