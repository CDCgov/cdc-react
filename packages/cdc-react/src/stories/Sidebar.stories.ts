import type { Meta, StoryObj } from "@storybook/react";

import { Sidebar } from "../components";

const meta: Meta<typeof Sidebar> = {
  title: "Components/Sidebar",
  component: Sidebar,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Example: Story = {
  args: {
    sections: [
      {
        heading: "Insights",
        items: [
          { icon: "dashboard", text: "Dashboard" },
          { icon: "process", text: "Process Status" },
          { icon: "quality", text: "Quality" },
        ],
      },
      {
        heading: "Admin Tasks",
        items: [{ icon: "user", text: "Manage Users" }],
      },
    ],
  },
};
