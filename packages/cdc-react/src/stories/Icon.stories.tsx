import { Meta, StoryObj } from "@storybook/react";
import {
  IconArrowDown,
  IconArrowLeft,
  IconArrowRight,
  IconArrowUp,
  IconChevronDoubleLeft,
  IconChevronDoubleRight,
  IconChevronDown,
  IconChevronUp,
  IconDashboard,
  IconDots,
  IconFilter,
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
      <div>
        <IconMenu />
        <IconDots />
        <IconFilter />
      </div>
      <div>
        <IconArrowLeft />
        <IconArrowRight />
        <IconArrowUp />
        <IconArrowDown />
      </div>
      <div>
        <IconChevronDown />
        <IconChevronUp />
      </div>
      <div>
        <IconChevronDoubleLeft />
        <IconChevronDoubleRight />
      </div>
      <div>
        <IconSquareArrowUpRight />
        <IconLogout />
      </div>
      <div>
        <IconUser />
        <IconNotifications />
      </div>
      <div>
        <IconDashboard />
      </div>
      <div>
        <IconSettings />
        <IconQuality />
      </div>
      <div>
        <IconSupport />
      </div>
      <div>
        <IconProcess />
      </div>
    </div>
  ),
};
