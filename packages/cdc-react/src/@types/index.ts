import { MouseEventHandler } from "react";

export type GlobalEventHandlerType =
  | ((this: GlobalEventHandlers, ev: Event) => unknown)
  | null;

const IconPositions = ["left", "right"] as const;

export type IconPositionsTypes = (typeof IconPositions)[number];

export interface MenuItemType {
  icon: React.ReactNode;
  badgeCount: number;
  srText: string;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}

export interface PopupMenuItemType {
  icon: React.ReactNode;
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

const ButtonIconPositions = ["left", "right", "both"] as const;

export type ButtonIconPositionTypes = (typeof ButtonIconPositions)[number];

export const ButtonPrimaryColors = [
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

export const ButtonTertiaryColors = [
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

export const ColorVariations = [
  "primary",
  "busy",
  "info",
  "success",
  "error",
  "warning",
];

export type ColorVariationTypes = (typeof ColorVariations)[number];

export const TableColumns = ["sm", "md", "lg"];

export type TableColumnTypes = (typeof TableColumns)[number];
