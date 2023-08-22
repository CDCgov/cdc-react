import { render, screen } from "@testing-library/react";

import { MenuItemType, PopupMenuItemType } from "../../@types";

import { ProfileHeader, ProfileHeaderLogo } from "../";

describe("ProfileHeader component", () => {
  it("should render some buttons", () => {
    const logo = <ProfileHeaderLogo image="../test.png" />;

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
      {
        badgeCount: 0,
        icon: "user",
        className: "user-profile",
        srText: "User profile button",
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

    render(
      <ProfileHeader
        className="profile-header"
        logo={logo}
        menuItems={menuItems}
        userProfilePopupMenuItems={popupMenuItems}
      />
    );

    expect(screen.getByText("Notifications button")).toBeInTheDocument();
    expect(screen.getByText("Settings button")).toBeInTheDocument();
  });
});
