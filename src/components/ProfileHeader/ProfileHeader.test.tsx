import { cleanup, render, screen } from "@testing-library/react";
import { afterEach } from "vitest";

import {
  ProfileHeader,
  ProfileHeaderLogo,
  ProfileHeaderMenuItem,
  ProfileHeaderPopupMenuItem,
  Icon
} from '../';

afterEach(() => {
  cleanup();
});

describe("Header component for DEX CDC Portal", () => {
  it("should render some buttons with the correct text", () => {
    const logo = <ProfileHeaderLogo image="../test.png" />;

    const menu = (menuClassName: string, setProfileHeaderPopupOpen: any, profileHeaderNotifications: any[]) => {
      return (
        <div className={menuClassName}>
          <ProfileHeaderMenuItem className="profile-header-menu-item hide-on-mobile">
            <Icon name="notifications" hasBadge={profileHeaderNotifications.length > 0} />
          </ProfileHeaderMenuItem>
          <ProfileHeaderMenuItem className="profile-header-menu-item hide-on-mobile">
            <Icon name="settings" />
          </ProfileHeaderMenuItem>
          <ProfileHeaderMenuItem className="profile-header-menu-item user-profile" onClick={() => setProfileHeaderPopupOpen((e: boolean) => !e)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 40 40" fill="none" className="user-image" stroke="#ddd">
              <circle cx="20" cy="20" r="20"></circle>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" className="chevron-down">
              <path d="M5.25 7.5L9 10.9091L12.75 7.5" stroke="#333333" strokeLinecap="round"></path>
            </svg>
          </ProfileHeaderMenuItem>
        </div>
      )
    };

    const popupMenu = (popupMenuWrapClassName: string, popupMenuClassName: string, profileHeaderPopupOpen: boolean, profileHeaderNotifications: any[]) => {
      return (
        <div className={popupMenuWrapClassName} style={{ display: (!profileHeaderPopupOpen ? 'none' : ' flex') }}>
          <div className={popupMenuClassName}>
            <ProfileHeaderPopupMenuItem className="profile-header-popup-menu-item">
              <span className="profile-header-popup-menu-item-left">
                <Icon name="profile" />
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
                <svg className="notification-count" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle cx="10" cy="12" r="10" fill="#AF4448" style={{ display: profileHeaderNotifications.length > 0 ? 'flex' : 'none' }}></circle>
                  <text style={{ display: profileHeaderNotifications.length > 0 ? 'flex' : 'none' }} alignmentBaseline="middle" x="10" y="12.5" textAnchor="middle">{profileHeaderNotifications.length}</text>
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
              <span className="profile-header-popup-menu-item-center">
                Logout
              </span>
            </ProfileHeaderPopupMenuItem>
          </div>
        </div>
      );
    };

    const { container } = render(
      <ProfileHeader
        className="profile-header"
        logo={logo}
        menu={menu("profile-header-menu-items", () => { }, [])}
        popupMenu={popupMenu("profile-header-popup-wrap", "profile-header-popup", true, [{}])}
      />
    );

    expect(container.getElementsByTagName("button").length).toBe(7);
    expect(screen.getByText("Your Profile")).toBeInTheDocument();
    expect(screen.getByText("Notifications")).toBeInTheDocument();
    expect(screen.getByText("Settings")).toBeInTheDocument();
    expect(screen.getByText("Logout")).toBeInTheDocument();
  });
});
