import "./ProfileHeaderMenuItem.scss";

import { MouseEventHandler } from "react";

interface ProfileHeaderMenuItemProps {
  srText: string;
  icon?: React.ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}

export const ProfileHeaderMenuItem = ({
  icon,
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
        {icon}
      </button>
    </>
  );
};
