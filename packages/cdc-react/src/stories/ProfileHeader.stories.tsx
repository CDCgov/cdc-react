import type { Meta, StoryObj } from "@storybook/react";

import { MenuItemType, PopupMenuItemType } from "../@types";

import { ProfileHeader, ProfileHeaderLogo } from "../components";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof ProfileHeader> = {
  title: "Components/ProfileHeader",
  component: ProfileHeader,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ProfileHeader>;

const logo = <ProfileHeaderLogo classNames={["logo"]} />;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
const menuItems: MenuItemType[] = [
  {
    badgeCount: 5,
    icon: "notifications",
    className: "hide-on-mobile",
    srText: "Notifications button",
  },
  {
    badgeCount: 0,
    icon: "settings",
    className: "hide-on-mobile",
    srText: "Settings button",
  },
];

const userProfilePopupMenuItems: PopupMenuItemType[] = [
  {
    icon: "user",
    iconPosition: "left",
    text: "Your Profile",
    onClick: undefined,
    badgeCount: 0,
  },
  {
    icon: "notifications",
    iconPosition: "left",
    text: "Notifications",
    onClick: undefined,
    badgeCount: 1,
  },
  {
    icon: "settings",
    iconPosition: "left",
    text: "Settings",
    onClick: undefined,
    badgeCount: 0,
  },
  {
    icon: "logout",
    iconPosition: "left",
    text: "Logout",
    onClick: undefined,
    badgeCount: 0,
  },
];

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Example: Story = {
  args: {
    logo: logo,
    className: "profile-header",
    menuItems: menuItems,
    userProfilePopupMenuItems: userProfilePopupMenuItems,
  },
};
