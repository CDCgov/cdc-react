import type { Meta, StoryObj } from "@storybook/react";
import { ProgressTracker } from "@us-gov-cdc/cdc-react";

const meta: Meta<typeof ProgressTracker> = {
  title: "Components/ProgressTracker",
  tags: ["autodocs"],
  component: ProgressTracker,
};

export default meta;

type Story = StoryObj<typeof ProgressTracker>;

export const Example: Story = {
  args: {
    complete: false,
    currentAmount: 50,
    indeterminate: false,
    label: "Stage: Uploading",
    totalAmount: 100,
  },
};

export const determinateNotComplete: Story = {
  args: {
    currentAmount: 50,
    label: "Stage: Uploading",
    totalAmount: 100,
  },
};

export const indeterminate: Story = {
  args: {
    indeterminate: true,
    label: "Stage: Validating",
  },
};

export const complete: Story = {
  args: {
    complete: true,
  },
};
