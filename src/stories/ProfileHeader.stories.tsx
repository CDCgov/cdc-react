import type { Meta, StoryObj } from "@storybook/react";

import { useState } from "react";

import {
  ProfileHeader,
  ProfileHeaderProps,
  ProfileHeaderLogo,
  ProfileHeaderMenuItem,
  ProfileHeaderPopupMenuItem,
  Icon,
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

const menu = (
  menuClassName: string,
  setProfileHeaderPopupOpen: any,
  profileHeaderNotifications: any[]
) => {
  return (
    <div className={menuClassName}>
      <ProfileHeaderMenuItem className="profile-header-menu-item hide-on-mobile">
        <Icon
          name="notifications"
          hasBadge={profileHeaderNotifications.length > 0}
        />
      </ProfileHeaderMenuItem>
      <ProfileHeaderMenuItem className="profile-header-menu-item hide-on-mobile">
        <Icon name="settings" />
      </ProfileHeaderMenuItem>
      <ProfileHeaderMenuItem
        className="profile-header-menu-item user-profile"
        onClick={() => setProfileHeaderPopupOpen((e: boolean) => !e)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          viewBox="0 0 40 40"
          fill="none"
          className="user-image"
          stroke="#ddd"
        >
          <circle cx="20" cy="20" r="20"></circle>
        </svg>
        <Icon name="chevron-down" className="chevron-down" />
      </ProfileHeaderMenuItem>
    </div>
  );
};

const popupMenu = (
  popupMenuWrapClassName: string,
  popupMenuClassName: string,
  profileHeaderPopupOpen: boolean,
  profileHeaderNotifications: any[]
) => {
  return (
    <div
      className={popupMenuWrapClassName}
      style={{ display: !profileHeaderPopupOpen ? "none" : " flex" }}
    >
      <div className={popupMenuClassName}>
        <ProfileHeaderPopupMenuItem className="profile-header-popup-menu-item">
          <span className="profile-header-popup-menu-item-left">
            <Icon name="user" />
          </span>
          <span className="profile-header-popup-menu-item-center">
            Your Profile
          </span>
        </ProfileHeaderPopupMenuItem>
        <ProfileHeaderPopupMenuItem className="profile-header-popup-menu-item">
          <span className="profile-header-popup-menu-item-left">
            <Icon name="notifications" />
          </span>
          <span className="profile-header-popup-menu-item-center">
            Notifications
          </span>
          <span className="profile-header-popup-menu-item-right">
            <svg
              className="notification-count"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle
                cx="10"
                cy="12"
                r="10"
                fill="#AF4448"
                style={{
                  display:
                    profileHeaderNotifications.length > 0 ? "flex" : "none",
                }}
              ></circle>
              <text
                style={{
                  display:
                    profileHeaderNotifications.length > 0 ? "flex" : "none",
                }}
                alignmentBaseline="middle"
                x="10"
                y="12.5"
                textAnchor="middle"
              >
                {profileHeaderNotifications.length}
              </text>
            </svg>
          </span>
        </ProfileHeaderPopupMenuItem>
        <ProfileHeaderPopupMenuItem className="profile-header-popup-menu-item">
          <span className="profile-header-popup-menu-item-left">
            <Icon name="settings" />
          </span>
          <span className="profile-header-popup-menu-item-center">
            Settings
          </span>
        </ProfileHeaderPopupMenuItem>
        <ProfileHeaderPopupMenuItem className="profile-header-popup-menu-item">
          <span className="profile-header-popup-menu-item-left">
            <Icon name="logout" />
          </span>
          <span className="profile-header-popup-menu-item-center">Logout</span>
        </ProfileHeaderPopupMenuItem>
      </div>
    </div>
  );
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Example: Story = {
  render: () => {
    const [profileHeaderPopupOpen, setProfileHeaderPopupOpen] = useState(false);
    const [profileHeaderNotifications] = useState([{ type: "alert" }]);

    return (
      <ProfileHeader
        className="profile-header"
        logo={logo}
        menu={menu(
          "profile-header-menu-items",
          setProfileHeaderPopupOpen,
          profileHeaderNotifications
        )}
        popupMenu={popupMenu(
          "profile-header-popup-wrap",
          "profile-header-popup",
          profileHeaderPopupOpen,
          profileHeaderNotifications
        )}
      />
    );
  },
  args: {
    className: "profile-header",
  },
};
