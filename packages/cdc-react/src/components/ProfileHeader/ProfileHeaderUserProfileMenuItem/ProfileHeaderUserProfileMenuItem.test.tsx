import { PopupMenuItemType } from "../../../@types";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { ProfileHeaderUserProfileMenuItem } from "./ProfileHeaderUserProfileMenuItem";

describe("ProfileHeaderUserProfileMenuItem component", () => {
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

  it("should render the popup menu", () => {
    render(
      <ProfileHeaderUserProfileMenuItem
        key={`profile-header-menu-item-0`}
        userProfilePopupMenuItems={popupMenuItems}
        className="test-class-name"
      />
    );

    expect(screen.getByText("Your Profile")).toBeInTheDocument();
    expect(screen.getByText("Notifications")).toBeInTheDocument();
    expect(screen.getByText("Settings")).toBeInTheDocument();
    expect(screen.getByText("Logout")).toBeInTheDocument();
  });

  it(`should set active element as first popup menu item on click of user profile button, tab should be make the second popup menu item the active element`, async () => {
    const user = userEvent.setup();

    render(
      <ProfileHeaderUserProfileMenuItem
        key={`profile-header-menu-item-0`}
        userProfilePopupMenuItems={popupMenuItems}
        className="test-class-name"
      />
    );

    const userProfileButton = screen.getByText("User profile button");
    const firstPopupMenuItem = screen.getByText("Your Profile");
    const secondPopupMenuItem = screen.getByText("Notifications");

    expect(firstPopupMenuItem).toBeInTheDocument();
    expect(secondPopupMenuItem).toBeInTheDocument();
    expect(userProfileButton).toBeInTheDocument();

    userProfileButton.click();

    expect(firstPopupMenuItem.parentElement).toHaveFocus();

    await user.tab();

    secondPopupMenuItem.focus();

    expect(secondPopupMenuItem.parentElement).toHaveFocus();
  });
});
