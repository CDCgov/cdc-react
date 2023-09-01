import { render, screen } from "@testing-library/react";
import { MenuItemType, PopupMenuItemType } from "../../@types";
import { ProfileHeader, ProfileHeaderLogo } from "../";
import { Icons } from "@us-gov-cdc/cdc-react-icons";

describe("ProfileHeader component", () => {
  it("should render some buttons", () => {
    const logo = <ProfileHeaderLogo image="../test.png" />;

    // More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
    const menuItems: MenuItemType[] = [
      {
        badgeCount: 5,
        icon: <Icons.Notifications />,
        className: "hide-on-mobile",
        srText: "Notifications button",
      },
      {
        badgeCount: 0,
        icon: <Icons.Settings />,
        className: "hide-on-mobile",
        srText: "Settings button",
      },
      {
        badgeCount: 0,
        icon: <Icons.User />,
        className: "user-profile",
        srText: "User profile button",
      },
    ];

    const popupMenuItems: PopupMenuItemType[] = [
      {
        icon: <Icons.User />,
        iconPosition: "left",
        text: "Your Profile",
        onClick: undefined,
        badgeCount: 0,
      },
      {
        icon: <Icons.Notifications />,
        iconPosition: "left",
        text: "Notifications",
        onClick: undefined,
        badgeCount: 1,
      },
      {
        icon: <Icons.Settings />,
        iconPosition: "left",
        text: "Settings",
        onClick: undefined,
        badgeCount: 0,
      },
      {
        icon: <Icons.Logout />,
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
