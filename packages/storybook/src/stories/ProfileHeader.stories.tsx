import type { Meta, StoryObj } from "@storybook/react";
import { ProfileHeader, ProfileHeaderLogo } from "@us-gov-cdc/cdc-react";
import { Icons } from "@us-gov-cdc/cdc-react-icons";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof ProfileHeader> = {
  title: "Components/ProfileHeader",
  tags: ['autodocs'],
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
    icon: <Icons.Bell hasBadge={true} />,
    className: "hide-on-mobile",
    srText: "Notifications button",
  },
  {
    badgeCount: 0,
    icon: <Icons.Settings />,
    className: "hide-on-mobile",
    srText: "Settings button",
  },
];

const userProfilePopupMenuItems: PopupMenuItemType[] = [
  {
    icon: <Icons.Person />,
    iconPosition: "left",
    text: "Your Profile",
    badgeCount: 0,
  },
  {
    icon: <Icons.Bell hasBadge={true} />,
    iconPosition: "left",
    text: "Notifications",
    badgeCount: 1,
  },
  {
    icon: <Icons.Settings />,
    iconPosition: "left",
    text: "Settings",
    badgeCount: 0,
  },
  {
    icon: <Icons.SquareHalfArrowRight />,
    iconPosition: "left",
    text: "Logout",
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
