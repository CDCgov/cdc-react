import "./ProfileHeader.scss";

import { MenuItemType, PopupMenuItemType } from "../../@types";

import { ProfileHeaderMenuItem } from "./ProfileHeaderMenuItem/ProfileHeaderMenuItem";
import { ProfileHeaderUserProfileMenuItem } from "./ProfileHeaderUserProfileMenuItem/ProfileHeaderUserProfileMenuItem";

export interface ProfileHeaderProps {
  className: string;
  logo?: string | JSX.Element;
  menuItems?: MenuItemType[];
  userProfilePopupMenuItems?: PopupMenuItemType[];
}
/**
 * Profile Header UI component
 */
export const ProfileHeader = ({
  logo,
  className,
  menuItems = [],
  userProfilePopupMenuItems = [],
}: ProfileHeaderProps) => {
  return (
    <div className="cdc-react">
      <header className={className}>
        {logo}
        <ul role="menubar" className="profile-header-menu">
          {menuItems.map((menuItem: MenuItemType, index: number) => (
            <li
              role="menuitem"
              key={`profile-header-menu-item-wrapper-${index}`}>
              <ProfileHeaderMenuItem
                key={`profile-header-menu-item-${index}`}
                className={`profile-header-menu-item profile-header-menu-item${index} ${menuItem.className}`}
                icon={menuItem.icon}
                badgeCount={menuItem.badgeCount}
                onClick={menuItem.onClick}
                srText={menuItem.srText}
              />
            </li>
          ))}
          <li
            role="menuitem"
            key={`profile-header-menu-item-wrapper-${menuItems.length}`}>
            <ProfileHeaderUserProfileMenuItem
              key={`profile-header-menu-item-0`}
              userProfilePopupMenuItems={userProfilePopupMenuItems}
              className={`profile-header-menu-item profile-header-menu-item${menuItems.length} user-profile`}
            />
          </li>
        </ul>
      </header>
    </div>
  );
};
