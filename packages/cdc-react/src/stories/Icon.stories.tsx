import { Meta, StoryObj } from "@storybook/react";
import { Icon } from "../components";

const meta: Meta<typeof Icon> = {
  title: "Components/Icon",
  component: Icon,
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
type Story = StoryObj<typeof Icon>;

export const all: Story = {
  render: () => (
    <div>
      <Icon name="chevron-down" />
      <Icon name="chevron-up" />
      <Icon name="chevron-double-left" />
      <Icon name="chevron-double-right" />
      <Icon name="dashboard" />
      <Icon name="logout" />
      <Icon name="menu" />
      <Icon name="notifications" />
      <Icon name="process" />
      <Icon name="quality" />
      <Icon name="settings" />
      <Icon name="squareArrowUpRight" />
      <Icon name="support" />
      <Icon name="user" />
    </div>
  ),
};

export const cheveronDown: Story = {
  args: {
    name: "chevron-down",
  },
};

export const cheveronUp: Story = {
  args: {
    name: "chevron-up",
  },
};
