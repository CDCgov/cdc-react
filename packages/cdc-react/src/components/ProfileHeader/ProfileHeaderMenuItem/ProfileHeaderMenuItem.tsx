import "./ProfileHeaderMenuItem.scss";

import { MouseEventHandler } from "react";

import { Icon, IconNames } from "../../Icon/Icon";

interface ProfileHeaderMenuItemProps {
  icon: IconNames;
  badgeCount: number;
  srText: string;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}

export const ProfileHeaderMenuItem = ({
  icon,
  badgeCount,
  srText,
  className,
  onClick,
}: ProfileHeaderMenuItemProps & JSX.IntrinsicElements["button"]) => {
  return (
    <>
      <span className="sr-only">{srText}</span>

      <button
        tabIndex={0}
        className={`profile-header-menu-item ${className}`}
        onClick={onClick}>
        <Icon name={icon} hasBadge={badgeCount > 0} />
      </button>
    </>
  );
};
