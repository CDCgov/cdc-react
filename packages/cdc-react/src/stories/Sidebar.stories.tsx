import type { Meta, StoryObj } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
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
          { icon: "dashboard", text: "Dashboard", route: "/" },
          { icon: "process", text: "Process Status", route: "/" },
          { icon: "quality", text: "Quality", route: "/" },
        ],
      },
      {
        heading: "Admin Tasks",
        items: [{ icon: "user", text: "Manage Users", route: "/" }],
      },
    ],
    footer: [
      {
        heading: "",
        items: [
          { icon: "support", text: "Support", route: "/support" },
          { icon: "logout", text: "Logout", route: "/logout" },
        ],
      },
    ],
  },
};
