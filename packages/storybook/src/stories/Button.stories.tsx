import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../../../cdc-react/src/components";
import { Icons } from "@us-gov-cdc/cdc-react-icons";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    backgrounds: {
      default: "default",
      values: [
        {
          name: "default",
          value: "#fff",
        },
        {
          name: "inverse",
          value: "#333333",
        },
      ],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const defaultButton: Story = {
  args: {
    ariaLabel: "Default button",
    children: <span>Default</span>,
  },
};

export const tinyButton: Story = {
  args: {
    ariaLabel: "Tiny button",
    size: "tiny",
    children: <span>Tiny</span>,
  },
};

export const bigButton: Story = {
  args: {
    ariaLabel: "Big button",
    size: "big",
    children: <span>Big</span>,
  },
};

export const defaultButtonDisabled: Story = {
  args: {
    ariaLabel: "Default button disabled",
    state: "disabled",
    children: <span>Disabled</span>,
  },
};

export const outlineButton: Story = {
  args: {
    ariaLabel: "Outline button",
    variation: "outline",
    children: <span>Outline</span>,
  },
};

export const outlineButtonDisabled: Story = {
  args: {
    ariaLabel: "Outline button disabled",
    variation: "outline",
    state: "disabled",
    children: <span>Outline</span>,
  },
};

export const textButton: Story = {
  args: {
    ariaLabel: "Text button",
    variation: "text",
    children: <span>Text</span>,
  },
};

export const textButtonDisabled: Story = {
  args: {
    ariaLabel: "Text button disabled",
    variation: "text",
    state: "disabled",
    children: <span>Text</span>,
  },
};

export const unstyledButton: Story = {
  args: {
    ariaLabel: "Unstyled button",
    variation: "unstyled",
    children: <span>Unstyled</span>,
  },
};

export const unstyledButtonDisabled: Story = {
  args: {
    ariaLabel: "Unstyled button disabled",
    variation: "unstyled",
    state: "disabled",
    children: <span>Unstyled</span>,
  },
};

export const inverseButton: Story = {
  args: {
    ariaLabel: "Inverse button",
    inverse: true,
    children: <span>Inverse</span>,
  },
};

export const inverseButtonDisabled: Story = {
  args: {
    ariaLabel: "Inverse button disabled",
    inverse: true,
    state: "disabled",
    children: <span>Disabled</span>,
  },
};

export const inverseOutlineButton: Story = {
  args: {
    ariaLabel: "Inverse outline button",
    inverse: true,
    variation: "outline",
    children: <span>Outline</span>,
  },
};

export const inverseOutlineButtonDisabled: Story = {
  args: {
    ariaLabel: "Inverse outline button disabled",
    inverse: true,
    variation: "outline",
    state: "disabled",
    children: <span>Outline</span>,
  },
};

export const inverseTextButton: Story = {
  args: {
    ariaLabel: "Inverse text button",
    inverse: true,
    variation: "text",
    children: <span>Text</span>,
  },
};

export const inverseTextButtonDisabled: Story = {
  args: {
    ariaLabel: "Inverse outline button disabled",
    inverse: true,
    variation: "text",
    state: "disabled",
    children: <span>Text</span>,
  },
};

export const inverseUnstyledButton: Story = {
  args: {
    ariaLabel: "Inverse unstyled button",
    inverse: true,
    variation: "unstyled",
    children: <span>Unstyled</span>,
  },
};

export const inverseUnstyledButtonDisabled: Story = {
  args: {
    ariaLabel: "Inverse unstyled button disabled",
    inverse: true,
    variation: "unstyled",
    state: "disabled",
    children: <span>Unstyled</span>,
  },
};

export const iconOnlyButton: Story = {
  args: {
    ariaLabel: "User button",
    icon: <Icons.User />,
    iconOnly: true,
  },
};

export const buttonWithIconLeft: Story = {
  args: {
    ariaLabel: "Quality page navigation button",
    icon: <Icons.Quality />,
    iconPosition: "left",
    children: <span>Quality</span>,
  },
};

export const buttonWithIconRight: Story = {
  args: {
    ariaLabel: "Process data button",
    icon: <Icons.Process />,
    iconPosition: "right",
    children: <span>Process</span>,
  },
};
