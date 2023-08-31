import type { Meta, StoryObj } from "@storybook/react";
import { Link, MemoryRouter } from "react-router-dom";
import { Sidebar } from "../components";

const meta: Meta<typeof Sidebar> = {
  title: "Components/Sidebar",
  component: Sidebar,
  argTypes: {},
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/"]}>
        <Story />
      </MemoryRouter>
    ),
  ],
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
            href: "https://google.com",
            target: "_blank",
            className: "anchor-dashboard",
          },
          {
            componentType: "button",
            icon: "process",
            text: "Process Status",
            route: "/",
          },
          {
            text: "routing-link",
            target: "_self",
            componentType: Link,
            to: "/sample",
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
