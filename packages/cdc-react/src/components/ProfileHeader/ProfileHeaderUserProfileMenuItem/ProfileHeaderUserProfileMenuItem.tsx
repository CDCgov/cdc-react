import "./ProfileHeaderUserProfileMenuItem.scss";

import { PopupMenuItemType } from "../../../@types";

import { useState, useEffect, useLayoutEffect, useRef } from "react";

import { ProfileHeaderPopupMenuItem } from "../ProfileHeaderPopupMenuItem/ProfileHeaderPopupMenuItem";
import { Icon } from "../../Icon/Icon";

export interface ProfileHeaderUserProfileMenuItemProps {
  className?: string;
  avatar?: string | JSX.Element;
  userProfilePopupMenuItems: PopupMenuItemType[];
}

interface PopupKeyCodeObject {
  [key: string]: (
    currentButton?: HTMLButtonElement | undefined,
    isLastIndex?: boolean | undefined
  ) => void;
}

/**
 * Profile Header User Profile Menu Item UI component
 */
export const ProfileHeaderUserProfileMenuItem = ({
  className, // avatar,
  userProfilePopupMenuItems = [],
}: ProfileHeaderUserProfileMenuItemProps) => {
  const [popupOpen, setProfileHeaderPopupOpenState] = useState(false);
  const [activePopupItemIndex, setProfileHeaderPopupItemIndex] = useState(0);

  const popupRef = useRef<HTMLDivElement>(null);
  const userProfileMenuItemRef = useRef<HTMLButtonElement>(null);

  const handleClickOutsidePopup = (ev: React.MouseEvent) => {
    if (
      userProfileMenuItemRef.current &&
      userProfileMenuItemRef.current?.contains(ev.target as Node)
    ) {
      setProfileHeaderPopupOpenState(!popupOpen);

      // Utilizes a setTimeout to move event after react hook event
      setTimeout(() => {
        (
          document.getElementsByClassName("profile-header-popup-menu-item")[
            activePopupItemIndex
          ] as HTMLButtonElement
        ).focus();
      }, 0);
    } else if (
      popupRef.current &&
      !popupRef.current?.contains(ev.target as Node)
    ) {
      setProfileHeaderPopupOpenState(false);
    }
  };

  const PopupKeyCodeMethods: PopupKeyCodeObject = {
    Tab: (currentButton?: HTMLButtonElement, isLastIndex?: boolean) => {
      if (!isLastIndex) {
        setProfileHeaderPopupItemIndex(activePopupItemIndex + 1);
      } else if (isLastIndex) {
        setProfileHeaderPopupItemIndex(0);
        setProfileHeaderPopupOpenState(false);
      }
    },
    Escape: () => {
      setProfileHeaderPopupOpenState(false);
    },
    Enter: (currentButton?: HTMLButtonElement) => {
      currentButton?.click();
    },
  } as const;

  const handlePopupKeyDown = (ev: React.KeyboardEvent) => {
    ev.preventDefault();

    const popupMenuButtons: HTMLCollectionOf<Element> | HTMLButtonElement[] =
      document.getElementsByClassName("profile-header-popup-menu-item");

    const currentButton: HTMLButtonElement = popupMenuButtons[
      activePopupItemIndex
    ] as HTMLButtonElement;

    const isLastIndex: boolean =
      activePopupItemIndex === popupMenuButtons.length - 1;

    const code: string = ev.code;
    const keys: string[] = Object.keys(PopupKeyCodeMethods);

    if (popupOpen && keys.includes(code)) {
      PopupKeyCodeMethods[code](currentButton, isLastIndex);
    }
  };

  useLayoutEffect(() => {
    const popupMenuButtons: HTMLCollectionOf<Element> | HTMLButtonElement[] =
      document.getElementsByClassName("profile-header-popup-menu-item");

    const buttonToFocus: HTMLButtonElement = popupMenuButtons[
      activePopupItemIndex
    ] as HTMLButtonElement;

    buttonToFocus.focus();
  });

  useEffect(() => {
    document.addEventListener(
      "mousedown",
      handleClickOutsidePopup as unknown as EventListenerOrEventListenerObject,
      true
    );

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

      <button className={className} ref={userProfileMenuItemRef} tabIndex={0}>
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
              onClick={popupMenuItem.onClick}
            />
          ))}
        </div>
      </div>
    </>
  );
};
