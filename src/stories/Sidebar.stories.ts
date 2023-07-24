import type { Meta, StoryObj } from "@storybook/react";

import { Sidebar } from "../components";

const meta = {
  title: "Components/Sidebar",
  component: Sidebar,
  tags: ["autodocs"],
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
          { icon: "🔥", text: "Dashboard" },
          { icon: "🔥", text: "Process Status" },
          { icon: "🔥", text: "Quality" }
        ],
      },
      {
        heading: "Admin Tasks",
        items: [
          { icon: "🔥", text: "..." }
        ],
      },
    ],
  },
};
