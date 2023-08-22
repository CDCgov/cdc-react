import "../../scss/global.scss";
import "./ProfileHeaderUserProfileMenu.scss";

import { PopupMenuItemType } from "../../@types";

import { useState, useEffect, useLayoutEffect, useRef } from "react";

import { ProfileHeaderPopupMenuItem } from "../ProfileHeader/ProfileHeaderPopupMenuItem/ProfileHeaderPopupMenuItem";
import { Icon } from "../Icon/Icon";

export interface ProfileHeaderUserProfileMenuItemProps {
  className: string;
  avatar?: string | JSX.Element;
  userProfilePopupMenuItems?: PopupMenuItemType[];
}

/**
 * Profile Header User Profile Menu Item UI component
 */
export const ProfileHeaderUserProfileMenuItem = ({
  className, // avatar,
  userProfilePopupMenuItems = [],
}: ProfileHeaderUserProfileMenuItemProps) => {
  const [popupOpen, setProfileHeaderPopupState] = useState(false);

  const popupRef = useRef<HTMLDivElement>(null);
  const userProfileMenuItemRef = useRef<HTMLButtonElement>(null);

  const handleClickOutsidePopup = (ev: React.MouseEvent) => {
    ev.preventDefault();

    if (
      userProfileMenuItemRef.current &&
      userProfileMenuItemRef.current?.contains(ev.target as Node)
    ) {
      setProfileHeaderPopupState(!popupOpen);
    } else if (
      popupRef.current &&
      !popupRef.current?.contains(ev.target as Node)
    ) {
      setProfileHeaderPopupState(false);
    }
  };

  // const PopupKeyCodeMethods: PopupKeyCodeObject = {
  //   Tab: (lastMenuItemIndex: number) => {
  //     const isLastIndex: boolean =
  //       profileHeaderPopupState.activeMenuItemIndex === lastMenuItemIndex;

  //     if (
  //       profileHeaderPopupState.open &&
  //       profileHeaderPopupState.lastMenuItemIndex !== -1
  //     ) {
  //       if (!isLastIndex) {
  //         setProfileHeaderPopupState({
  //           open: true,
  //           activeMenuItemIndex:
  //             profileHeaderPopupState.activeMenuItemIndex + 1,
  //           lastMenuItemIndex: lastMenuItemIndex,
  //         } as ProfileHeaderPopupState);
  //       } else {
  //         // add one more state hook for index - maybe able to remove class with index
  //         setProfileHeaderPopupState({
  //           open: false,
  //           activeMenuItemIndex: 0,
  //           lastMenuItemIndex: lastMenuItemIndex,
  //         } as ProfileHeaderPopupState);
  //       }
  //     }
  //   },
  //   Escape: (lastMenuItemIndex: number) => {
  //     setProfileHeaderPopupState({
  //       open: false,
  //       activeMenuItemIndex: 0,
  //       lastMenuItemIndex: -1,
  //     } as ProfileHeaderPopupState);
  //   },
  // } as const;

  const handlePopupKeyDown = (ev: React.KeyboardEvent) => {
    ev.preventDefault();

    // const popupMenuButtons: HTMLCollectionOf<Element> | HTMLButtonElement =
    //   document.getElementsByClassName("profile-header-popup-menu-item");

    const code: string = ev.code;

    console.log(code);
  };

  // const handleKeyDown = function (ev: React.KeyboardEvent) {
  //   handlePopupKeyDown(ev);
  // };

  useLayoutEffect(() => {
    // const popupMenuButtons: HTMLCollectionOf<Element> | HTMLButtonElement =
    //   document.getElementsByClassName("profile-header-popup-menu-item");
    // const buttonToFocus: HTMLButtonElement = popupMenuButtons[
    //   activeMenuItemIndex
    // ] as HTMLButtonElement;
    // buttonToFocus.focus();
  });

  useEffect(() => {
    document.addEventListener(
      "keydown",
      handlePopupKeyDown as unknown as EventListenerOrEventListenerObject,
      true
    );

    document.addEventListener(
      "mousedown",
      handleClickOutsidePopup as unknown as EventListenerOrEventListenerObject,
      true
    );

    return () => {
      document.removeEventListener(
        "keydown",
        handlePopupKeyDown as unknown as EventListenerOrEventListenerObject,
        true
      );

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
        }`}>
        <div className="profile-header-popup" ref={popupRef}>
          {(userProfilePopupMenuItems || []).map((popupMenuItem, index) => (
            <ProfileHeaderPopupMenuItem
              index={index}
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
