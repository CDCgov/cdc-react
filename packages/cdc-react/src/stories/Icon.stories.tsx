import { Meta, StoryObj } from "@storybook/react";
import {
  IconChevronDoubleLeft,
  IconChevronDoubleRight,
  IconChevronDown,
  IconChevronUp,
  IconDashboard,
  IconLogout,
  IconMenu,
  IconNotifications,
  IconProcess,
  IconQuality,
  IconSettings,
  IconSquareArrowUpRight,
  IconSupport,
  IconUser,
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
      <IconChevronDown />
      <IconChevronUp />
      <IconChevronDoubleLeft />
      <IconChevronDoubleRight />
      <IconDashboard />
      <IconLogout />
      <IconMenu />
      <IconNotifications />
      <IconProcess />
      <IconQuality />
      <IconSettings />
      <IconSquareArrowUpRight />
      <IconSupport />
      <IconUser />
    </div>
  ),
};
