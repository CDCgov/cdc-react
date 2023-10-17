import type { Meta, StoryObj } from "@storybook/react";
import { Sidebar } from "@us-gov-cdc/cdc-react";
import { Icons } from "@us-gov-cdc/cdc-react-icons";

const meta: Meta<typeof Sidebar> = {
  title: "Components/Sidebar",
  tags: ['autodocs'],
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
            componentType: "a",
            icon: <Icons.Dashboard />,
            text: "Dashboard",
            href: "/",
          },
          {
            componentType: "a",
            icon: <Icons.ZigZag />,
            text: "Process Status",
            href: "/",
          },
          {
            componentType: "a",
            icon: <Icons.Star />,
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
            icon: <Icons.Person />,
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
            icon: <Icons.Support />,
            text: "Support",
            href: "/support",
          },
          {
            componentType: "a",
            icon: <Icons.SquareHalfArrowRight />,
            text: "Logout",
            href: "/logout",
          },
        ],
      },
    ],
  },
};
