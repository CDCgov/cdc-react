import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../components";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const defaultButton: Story = {
  args: {},
};

export const tinyButton: Story = {
  args: {},
};

export const bigButton: Story = {
  args: {},
};

export const iconLeftButton: Story = {
  args: {},
};

export const iconRightButton: Story = {
  args: {},
};

export const iconOnlyButton: Story = {
  args: {
    iconName: "user",
    iconOnly: true,
  },
};

export const ButtonStates: Story = {
  args: {},
};

export const ButtonStyleVariations: Story = {
  args: {},
};
