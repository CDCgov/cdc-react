import "./ProfileHeaderMenuItem.scss";

import { MouseEventHandler } from "react";

import { Icon, IconNames } from "../../Icon/Icon";

interface ProfileHeaderMenuItemProps {
  icon: IconNames;
  badgeCount: number;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}

export const ProfileHeaderMenuItem = ({
  icon,
  badgeCount,
  className,
  onClick,
}: ProfileHeaderMenuItemProps & JSX.IntrinsicElements["button"]) => {
  return (
    <button
      className={`profile-header-menu-item ${className}`}
      onClick={onClick}>
      {(className || "").indexOf("user-profile") > -1 ? (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 40 40"
            fill="none"
            className="user-image"
            stroke="#ddd">
            <circle cx="20" cy="20" r="20"></circle>
          </svg>
          <Icon name="chevron-down" className="chevron-down" />
        </>
      ) : (
        <Icon name={icon} hasBadge={badgeCount > 0} />
      )}
    </button>
  );
};
