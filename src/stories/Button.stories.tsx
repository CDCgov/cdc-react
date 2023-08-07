import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../components";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const defaultButton: Story = {
  args: {
    children: (<span>Default</span>)
  },
};

export const tinyButton: Story = {
  args: {
    size: "tiny",
    children: (<span>Tiny</span>)},
};

export const bigButton: Story = {
  args: {
    size: "big",
    children: (<span>Big</span>)
  },
};

export const defaultButtonDisabled: Story = {
  args: {
    state: "disabled",
    children: (<span>Disabled</span>)
  },
};

export const outlineButton: Story = {
  args: {
    variation: "outline",
    children: (<span>Outline</span>)
  },
};

export const outlineButtonDisabled: Story = {
  args: {
    variation: "outline",
    state: "disabled",
    children: (<span>Outline</span>)
  },
};

export const textButton: Story = {
  args: {
    variation: "text",
    children: (<span>Text</span>)
  },
};

export const textButtonDisabled: Story = {
  args: {
    variation: "text",
    state: "disabled",
    children: (<span>Text</span>)
  },
};

export const iconOnlyButton: Story = {
  args: {
    iconName: "user",
    iconOnly: true,
  },
};

export const buttonWithIconLeft: Story = {
  args: {
    iconName: "quality",
    iconPosition: "left",
    children: (<span>Quality</span>)
  },
};

export const buttonWithIconRight: Story = {
  args: {
    iconName: "process",
    iconPosition: "right",
    children: (<span>Process</span>)
  },
};
