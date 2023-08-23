import "./ProfileHeaderPopupMenuItem.scss";

import { IconPositionsTypes } from "../../../@types";

import { Icon, IconNames } from "../../Icon/Icon";

import { MouseEventHandler } from "react";

interface ProfileHeaderPopupMenuItemProps {
  icon: IconNames;
  iconPosition: IconPositionsTypes;
  text: string;
  badgeCount: number;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}

export const ProfileHeaderPopupMenuItem = ({
  icon,
  iconPosition,
  text,
  badgeCount,
  className,
  onClick,
}: ProfileHeaderPopupMenuItemProps & JSX.IntrinsicElements["button"]) => {
  return (
    <button
      tabIndex={1}
      className={`${className} profile-header-popup-menu-item`}
      onClick={onClick}>
      <span className="profile-header-popup-menu-item-left">
        {iconPosition === "left" ? <Icon name={icon} /> : <></>}
      </span>
      <span className="profile-header-popup-menu-item-center">{text}</span>
      {iconPosition === "right" ? (
        <Icon name={icon} />
      ) : badgeCount > 0 ? (
        <span className="profile-header-popup-menu-item-right">
          <svg
            className="notification-count"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none">
            <circle
              cx="10"
              cy="12"
              r="10"
              fill="#AF4448"
              style={{
                display: badgeCount > 0 ? "flex" : "none",
              }}></circle>
            <text
              style={{
                display: badgeCount > 0 ? "flex" : "none",
              }}
              alignmentBaseline="middle"
              x="10.5"
              y="12.5"
              textAnchor="middle">
              {badgeCount}
            </text>
          </svg>
        </span>
      ) : (
        <></>
      )}
    </button>
  );
};
