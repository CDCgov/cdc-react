import { Meta, StoryObj } from "@storybook/react";
import {
  CheveronDoubleLeft,
  CheveronDoubleRight,
  CheveronDown,
  CheveronUp,
  Dashboard,
  Logout,
  Menu,
  Notifications,
  Process,
  Quality,
  Settings,
  SquareArrowUpRight,
  Support,
  User,
} from "@us-gov-cdc/cdc-react-icons";

const meta: Meta = {
  title: "Components/Icon",
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

export const all: StoryObj = {
  render: () => (
    <div>
      <CheveronDown />
      <CheveronUp />
      <CheveronDoubleLeft />
      <CheveronDoubleRight />
      <Dashboard />
      <Logout />
      <Menu />
      <Notifications />
      <Process />
      <Quality />
      <Settings />
      <SquareArrowUpRight />
      <Support />
      <User />
    </div>
  ),
};
