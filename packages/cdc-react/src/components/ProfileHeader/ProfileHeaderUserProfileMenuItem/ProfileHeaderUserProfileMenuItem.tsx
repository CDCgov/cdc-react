import "./ProfileHeaderUserProfileMenuItem.scss";

import { PopupMenuItemType } from "../../../@types";

import { useEffect, useRef, useState } from "react";

import { Icon } from "../../Icon/Icon";
import { ProfileHeaderPopupMenuItem } from "../ProfileHeaderPopupMenuItem/ProfileHeaderPopupMenuItem";

export interface ProfileHeaderUserProfileMenuItemProps {
  className?: string;
  avatar?: string | JSX.Element;
  userProfilePopupMenuItems: PopupMenuItemType[];
}

interface PopupKeyCodeObject {
  [key: string]: (isLastIndex?: boolean | undefined) => void;
}

/**
 * Profile Header User Profile Menu Item UI component
 */
export const ProfileHeaderUserProfileMenuItem = ({
  className,
  userProfilePopupMenuItems = [],
}: ProfileHeaderUserProfileMenuItemProps) => {
  const [popupOpen, setProfileHeaderPopupOpenState] = useState(false);
  const activePopupItemIndex = useRef(0);

  const popupRef = useRef<HTMLDivElement>(null);
  const userProfileMenuItemRef = useRef<HTMLButtonElement>(null);

  const handleClickOutsidePopup = (ev: React.MouseEvent) => {
    if (
      userProfileMenuItemRef.current &&
      userProfileMenuItemRef.current?.contains(ev.target as Node)
    ) {
      setProfileHeaderPopupOpenState(!popupOpen);
    } else if (
      popupRef.current &&
      !popupRef.current?.contains(ev.target as Node)
    ) {
      setProfileHeaderPopupOpenState(false);
    }
  };

  const PopupKeyDownMethods: PopupKeyCodeObject = {
    Tab: (isLastIndex?: boolean) => {
      if (isLastIndex) {
        activePopupItemIndex.current = 0;
        setProfileHeaderPopupOpenState(false);
      } else {
        activePopupItemIndex.current++;
      }
    },
    Escape: () => {
      setProfileHeaderPopupOpenState(false);
    },
  } as const;

  const handlePopupKeyDown = (ev: React.KeyboardEvent) => {
    const popupMenuButtons: HTMLCollectionOf<Element> | HTMLButtonElement[] =
      document.getElementsByClassName("profile-header-popup-menu-item");

    const isLastIndex: boolean =
      activePopupItemIndex.current === popupMenuButtons.length - 1;

    const code: string = ev.code;
    const keys: string[] = Object.keys(PopupKeyDownMethods);

    if (popupOpen && keys.includes(code)) {
      PopupKeyDownMethods[code](isLastIndex);
    }
  };

  useEffect(() => {
    document.addEventListener(
      "mousedown",
      handleClickOutsidePopup as unknown as EventListenerOrEventListenerObject,
      true
    );

    if (popupOpen) {
      // Utilizes a setTimeout to move event after react hook event
      setTimeout(() => {
        (
          document.getElementsByClassName("profile-header-popup-menu-item")[
            activePopupItemIndex.current
          ] as HTMLButtonElement
        ).focus();
      }, 0);
    }

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutsidePopup as unknown as EventListenerOrEventListenerObject,
        true
      );
    };
  });

  return (
    <>
      <span className="sr-only">User profile button</span>

      <button className={className} ref={userProfileMenuItemRef}>
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
        <Icon
          name={popupOpen ? "chevron-up" : "chevron-down"}
          className={popupOpen ? "chevron-up" : "chevron-down"}
        />
      </button>

      <div
        className={`profile-header-popup-wrap ${
          popupOpen ? "profile-header-popup-wrap-show" : ""
        }`}
        onKeyDown={handlePopupKeyDown}>
        <div className="profile-header-popup" ref={popupRef}>
          {(userProfilePopupMenuItems || []).map((popupMenuItem, index) => (
            <ProfileHeaderPopupMenuItem
              key={`profile-header-popup-menu-item-${index}`}
              className={`profile-header-popup-menu-item ${popupMenuItem.className} profile-header-popup-menu-item${index}`}
              icon={popupMenuItem.icon}
              iconPosition={popupMenuItem.iconPosition}
              text={popupMenuItem.text}
              badgeCount={popupMenuItem.badgeCount}
              tabIndex={index}
              focused={index === activePopupItemIndex.current}
              onClick={popupMenuItem.onClick}
            />
          ))}
        </div>
      </div>
    </>
  );
};