import { render, screen } from "@testing-library/react";

import { MenuItem, PopupMenuItem } from "../../@types";

import { ProfileHeader, ProfileHeaderLogo } from "../";

describe("Header component for DEX CDC Portal", () => {
  it("should render some buttons with the correct text", () => {
    const logo = <ProfileHeaderLogo image="../test.png" />;

    // More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
    const menuItems: MenuItem[] = [
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
        onClick: () => null,
        className: "user-profile",
      },
    ];

    const popupMenuItems: PopupMenuItem[] = [
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

    const { container } = render(
      <ProfileHeader
        className="profile-header"
        profileHeaderPopupOpen={false}
        logo={logo}
        menuItems={menuItems}
        popupMenuItems={popupMenuItems}
      />
    );

    expect(container.getElementsByTagName("button").length).toBe(7);
    expect(screen.getByText("Your Profile")).toBeInTheDocument();
    expect(screen.getByText("Notifications")).toBeInTheDocument();
    expect(screen.getByText("Settings")).toBeInTheDocument();
    expect(screen.getByText("Logout")).toBeInTheDocument();
  });
});
