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

export const unstyledButton: Story = {
  args: {
    variation: "unstyled",
    children: (<span>Unstyled</span>)
  },
};

export const unstyledButtonDisabled: Story = {
  args: {
    variation: "unstyled",
    state: "disabled",
    children: (<span>Unstyled</span>)
  },
};

export const inverseButton: Story = {
  args: {
    inverse: true,
    children: (<span>Inverse</span>)
  },
};

export const inverseButtonDisabled: Story = {
  args: {
    inverse: true,
    state: "disabled",
    children: (<span>Disabled</span>)
  },
};

export const inverseOutlineButton: Story = {
  args: {
    inverse: true,
    variation: "outline",
    children: (<span>Outline</span>)
  },
};

export const inverseOutlineButtonDisabled: Story = {
  args: {
    inverse: true,
    variation: "outline",
    state: "disabled",
    children: (<span>Outline</span>)
  },
};

export const inverseTextButton: Story = {
  args: {
    inverse: true,
    variation: "text",
    children: (<span>Text</span>)
  },
};

export const inverseTextButtonDisabled: Story = {
  args: {
    inverse: true,
    variation: "text",
    state: "disabled",
    children: (<span>Text</span>)
  },
};

export const inverseUnstyledButton: Story = {
  args: {
    inverse: true,
    variation: "unstyled",
    children: (<span>Unstyled</span>)
  },
};

export const inverseUnstyledButtonDisabled: Story = {
  args: {
    inverse: true,
    variation: "unstyled",
    state: "disabled",
    children: (<span>Unstyled</span>)
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
