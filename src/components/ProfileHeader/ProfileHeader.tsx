import "../../scss/global.scss";
import "./ProfileHeader.scss";

import { MenuItem, PopupMenuItem } from "../../@types";

import { ProfileHeaderMenuItem } from "./ProfileHeaderMenuItem/ProfileHeaderMenuItem";
import { ProfileHeaderPopupMenuItem } from "./ProfileHeaderPopupMenuItem/ProfileHeaderPopupMenuItem";

export interface ProfileHeaderProps {
  className: string;
  logo?: string | JSX.Element;
  menuItems?: MenuItem[];
  popupMenuItems?: PopupMenuItem[];
  profileHeaderPopupOpen: boolean;
}

export interface ProfileHeaderNotification {
  type: string;
}

/**
 * Profile Header UI component
 */
export const ProfileHeader = ({
  logo,
  className,
  profileHeaderPopupOpen,
  menuItems,
  popupMenuItems,
}: ProfileHeaderProps) => {
  return (
    <div className="cdc-react">
      <header className={className}>
        {logo}
        <div className="profile-header-menu">
          {(menuItems || []).map((menuItem, index) => (
            <ProfileHeaderMenuItem
              key={`profile-header-menu-item-${index}`}
              className={`${menuItem.className} profile-header-menu-item`}
              icon={menuItem.icon}
              badgeCount={menuItem.badgeCount}
              onClick={menuItem.onClick}
            />
          ))}
        </div>
      </header>
      <div
        className="profile-header-popup-wrap"
        style={{ display: !profileHeaderPopupOpen ? "none" : " flex" }}>
        <div className="profile-header-popup">
          {(popupMenuItems || []).map((popupMenuItem, index) => (
            <ProfileHeaderPopupMenuItem
              key={`profile-header-popup-menu-item-${index}`}
              className={`${popupMenuItem.className} profile-header-popup-menu-item`}
              icon={popupMenuItem.icon}
              iconPosition={popupMenuItem.iconPosition}
              text={popupMenuItem.text}
              badgeCount={popupMenuItem.badgeCount}
              onClick={popupMenuItem.onClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
