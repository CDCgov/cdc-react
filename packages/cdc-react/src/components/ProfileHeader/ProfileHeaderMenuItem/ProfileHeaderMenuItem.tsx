import "./ProfileHeaderMenuItem.scss";

import { MouseEventHandler } from "react";

import { Icon, IconNames } from "../../Icon/Icon";

interface ProfileHeaderMenuItemProps {
  icon: IconNames;
  badgeCount: number;
  srText: string;
  avatar?: string; // TODO: Create interface for avatar prop
  popupOpen?: boolean;
  className?: string;
  showChevrons?: boolean;
  onClick?:
    | MouseEventHandler<HTMLButtonElement>
    | (void & MouseEventHandler<HTMLButtonElement>)
    | undefined;
}

export const ProfileHeaderMenuItem = ({
  icon,
  badgeCount,
  srText,
  avatar,
  popupOpen,
  className,
  showChevrons,
  onClick,
}: ProfileHeaderMenuItemProps & JSX.IntrinsicElements["button"]) => {
  return (
    <>
      <span className="sr-only">{srText}</span>

      <button
        className={`profile-header-menu-item ${className}`}
        onClick={onClick}>
        {avatar ? (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 40 40"
              fill="#DDD"
              className="user-image"
              stroke="#ddd">
              <circle cx="20" cy="20" r="20"></circle>
            </svg>
            {showChevrons && (
              <Icon
                name={popupOpen ? "chevron-up" : "chevron-down"}
                className={popupOpen ? "chevron-up" : "chevron-down"}
              />
            )}
          </>
        ) : (
          <Icon name={icon} hasBadge={badgeCount > 0} />
        )}
      </button>
    </>
  );
};
