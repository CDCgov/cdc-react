import type { Meta, StoryObj } from "@storybook/react";

import { useState } from "react";

import { MenuItemType, PopupMenuItemType } from "../@types";

import {
  ProfileHeader,
  ProfileHeaderProps,
  ProfileHeaderLogo,
} from "../components";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Components/ProfileHeader",
  component: ProfileHeader,
  argTypes: {},
} satisfies Meta<typeof ProfileHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

const logo = <ProfileHeaderLogo classNames={["logo"]} />;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
const menuItems: MenuItemType[] = [
  {
    badgeCount: 5,
    icon: "notifications",
    className: "hide-on-mobile",
  },
  {
    badgeCount: 0,
    icon: "settings",
    className: "hide-on-mobile",
  },
  {
    badgeCount: 0,
    icon: "user",
    className: "user-profile",
  },
];

const popupMenuItems: PopupMenuItemType[] = [
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
  render: (args: ProfileHeaderProps) => {
    const [profileHeaderPopupOpen, setProfileHeaderPopupOpen] = useState(
      args.profileHeaderPopupOpen
    );

    menuItems[menuItems.length - 1].onClick = () =>
      setProfileHeaderPopupOpen(!profileHeaderPopupOpen);

    return (
      <ProfileHeader
        className={args.className}
        profileHeaderPopupOpen={profileHeaderPopupOpen}
        logo={logo}
        menuItems={menuItems}
        popupMenuItems={popupMenuItems}
      />
    );
  },
  args: {
    className: "profile-header",
    profileHeaderPopupOpen: false,
    menuItems: menuItems,
    popupMenuItems: popupMenuItems,
  },
};
