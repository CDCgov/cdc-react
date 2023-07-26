import type { Meta, StoryObj } from "@storybook/react";

import { Sidebar } from "../components";

const meta = {
  title: "Components/Sidebar",
  component: Sidebar,
  argTypes: {},
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

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
