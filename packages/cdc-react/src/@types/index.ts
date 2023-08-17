import { MouseEventHandler } from "react";
import { IconNames } from "../components/Icon/Icon";

export type GlobalEventHandlerType =
  | ((this: GlobalEventHandlers, ev: Event) => unknown)
  | null;

const IconPositions = ["left", "right"] as const;

export type IconPositionsTypes = (typeof IconPositions)[number];

export interface MenuItemType {
  icon: IconNames;
  badgeCount: number;
  srText: string;
  showProfileHeaderPopupMenuOnClick?: boolean;
  avatar?: string;
  className?: string;
  showChevrons?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}

export interface PopupMenuItemType {
  icon: IconNames;
  iconPosition: IconPositionsTypes;
  text: string;
  badgeCount: number;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}

const ButtonAccessibilityThemes = ["primary", "tertiary"] as const;

export type ButtonAccessibilityThemeTypes =
  (typeof ButtonAccessibilityThemes)[number];

const ButtonSizes = ["tiny", "default", "big"] as const;

export type ButtonSizeTypes = (typeof ButtonSizes)[number];

const ButtonVariations = ["filled", "outline", "text", "unstyled"] as const;

export type ButtonVariationsTypes = (typeof ButtonVariations)[number];

const ButtonStates = [
  "default",
  "hover",
  "active",
  "focus",
  "disabled",
] as const;

export type ButtonStateTypes = (typeof ButtonStates)[number];

const ButtonIconPositions = ["left", "right"] as const;

export type ButtonIconPositionTypes = (typeof ButtonIconPositions)[number];

const ButtonPrimaryColors = [
  "blue",
  "brown",
  "cyan",
  "green",
  "indigo",
  "orange",
  "pink",
  "purple",
  "slate",
  "teal",
] as const;

export type ButtonPrimaryColorTypes = (typeof ButtonPrimaryColors)[number];

const ButtonTertiaryColors = [
  "amber",
  "blue",
  "brown",
  "cyan",
  "green",
  "indigo",
  "orange",
  "pink",
  "purple",
  "slate",
  "teal",
] as const;

export type ButtonTertiaryColorTypes = (typeof ButtonTertiaryColors)[number];
