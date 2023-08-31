import type { Meta, StoryObj } from "@storybook/react";

import { Sidebar } from "../components";
import { Icons } from "@us-gov-cdc/cdc-react-icons";

const meta: Meta<typeof Sidebar> = {
  title: "Components/Sidebar",
  component: Sidebar,
  argTypes: {},
  decorators: [(Story) => <Story />],
};

export default meta;

type Story = StoryObj<typeof Sidebar>;

export const Example: Story = {
  args: {
    sections: [
      {
        heading: "Insights",
        items: [
          {
            icon: "dashboard",
            text: "Dashboard",
            componentType: "a",
            href: "/",
          },
          {
            componentType: "a",
            icon: "process",
            text: "Process Status",
            href: "/",
          },
          {
            componentType: "a",
            icon: "quality",
            text: "Quality",
            href: "/",
          },
        ],
      },
      {
        heading: "Admin Tasks",
        items: [
          {
            componentType: "a",
            icon: "user",
            text: "Manage Users",
            href: "/",
          },
        ],
      },
    ],
    footer: [
      {
        heading: "",
        items: [
          {
            componentType: "a",
            icon: "support",
            text: "Support",
            href: "/support",
          },
          {
            componentType: "a",
            icon: "logout",
            text: "Logout",
            href: "/logout",
          },
        ],
      },
    ],
  },
};
