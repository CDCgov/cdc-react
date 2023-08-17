import "../../scss/global.scss";
import "./ProfileHeader.scss";

import { MenuItemType, PopupMenuItemType } from "../../@types";

import { ProfileHeaderMenuItem } from "./ProfileHeaderMenuItem/ProfileHeaderMenuItem";
import { ProfileHeaderPopupMenuItem } from "./ProfileHeaderPopupMenuItem/ProfileHeaderPopupMenuItem";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

export interface ProfileHeaderProps {
  className: string;
  logo?: string | JSX.Element;
  menuItems?: MenuItemType[];
  popupMenuItems?: PopupMenuItemType[];
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
  menuItems = [],
  popupMenuItems,
}: ProfileHeaderProps) => {
  const [profileHeaderPopupOpen, setProfileHeaderPopupOpen] = useState(false);

  const popupRef = useRef<HTMLDivElement>(null);

  const handleClickOutsidePopup: EventListenerOrEventListenerObject = (
    ev: Event
  ) => {
    ev.preventDefault();

    if (popupRef.current && !popupRef.current?.contains(ev.target as Node)) {
      setProfileHeaderPopupOpen(false);
    }

    const closestButton: HTMLButtonElement | null = (
      ev.target as HTMLElement
    ).closest("button");

    const closestButtonIsUserProfileMenuItem: boolean =
      (closestButton &&
        closestButton.classList.contains(
          "profile-header-user-profile-menu-item"
        )) ||
      false;

    if (profileHeaderPopupOpen === true && closestButtonIsUserProfileMenuItem) {
      // Added setTimeout to prevent issues inside the performance events timing cycle
      setProfileHeaderPopupOpen(false);
    } else if (
      profileHeaderPopupOpen === false &&
      closestButtonIsUserProfileMenuItem
    ) {
      setProfileHeaderPopupOpen(true);
    }
  };

  const handleKeyDown = function (ev: React.KeyboardEvent) {
    if ((document.activeElement?.classList.length || -1) > 1) {
      const indexString: RegExpMatchArray | null | undefined =
        document.activeElement?.classList[2].match(/[0-9]/g) || ["-1"];

      if (indexString.length > 0) {
        const index: number = parseInt(indexString[0]);
        const elements: HTMLCollectionOf<Element> | HTMLButtonElement =
          document.getElementsByClassName("profile-header-popup-menu-item");

        switch (ev.code) {
          case "Tab":
            if (index === elements.length - 1) {
              setProfileHeaderPopupOpen(!profileHeaderPopupOpen);
            }
        }
      }
    }
  };

  useLayoutEffect(() => {
    const popupMenuButtons: HTMLCollectionOf<Element> | HTMLButtonElement =
      document.getElementsByClassName("profile-header-popup-menu-item");

    if (popupMenuButtons.length > -1) {
      (popupMenuButtons[0] as HTMLButtonElement).focus();
    }
  });

  useEffect(() => {
    document.addEventListener(
      "keydown",
      handleKeyDown as unknown as EventListenerOrEventListenerObject,
      true
    );

    document.addEventListener(
      "click",
      handleClickOutsidePopup as EventListenerOrEventListenerObject,
      true
    );

    return () => {
      document.removeEventListener(
        "keydown",
        handleKeyDown as unknown as EventListenerOrEventListenerObject,
        true
      );

      document.removeEventListener(
        "click",
        handleClickOutsidePopup as EventListenerOrEventListenerObject,
        true
      );
    };
  }, [profileHeaderPopupOpen]);

  return (
    <div className="cdc-react">
      <header className={className}>
        {logo}
        <div className="profile-header-menu">
          {menuItems.map((menuItem: MenuItemType, index: number) => {
            if (menuItem.showProfileHeaderPopupMenuOnClick) {
              return (
                <div key={`profile-header-menu-item-wrapper-${index}`}>
                  <ProfileHeaderMenuItem
                    key={`profile-header-menu-item-${index}`}
                    className={`profile-header-menu-item ${menuItem.className} profile-header-user-profile-menu-item profile-header-menu-item${index}`}
                    icon={menuItem.icon}
                    badgeCount={menuItem.badgeCount}
                    avatar={menuItem.avatar}
                    popupOpen={profileHeaderPopupOpen}
                    srText={menuItem.srText}
                    onClick={menuItem.onClick}
                    showChevrons={menuItem.showChevrons}
                  />
                </div>
              );
            } else {
              return (
                <ProfileHeaderMenuItem
                  key={`profile-header-menu-item-${index}`}
                  className={`profile-header-menu-item ${menuItem.className} profile-header-menu-item${index}`}
                  icon={menuItem.icon}
                  badgeCount={menuItem.badgeCount}
                  onClick={menuItem.onClick}
                  srText={menuItem.srText}
                />
              );
            }
          })}
        </div>
      </header>
      <div
        className={`profile-header-popup-wrap ${
          profileHeaderPopupOpen ? "profile-header-popup-wrap-show" : ""
        }`}>
        <div className="profile-header-popup" ref={popupRef}>
          {(popupMenuItems || []).map((popupMenuItem, index) => (
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
    </div>
  );
};
