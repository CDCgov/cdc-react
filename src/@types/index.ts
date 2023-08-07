import { MouseEventHandler } from "react";
import { IconNames } from "../components";

export type GlobalEventHandlerType =
  | ((this: GlobalEventHandlers, ev: Event) => unknown)
  | null;
const IconPositions = ["left", "right"] as const;

export type IconPositionsTypes = (typeof IconPositions)[number];

export interface MenuItemType {
  icon: IconNames;
  badgeCount: number;
  className?: string;
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
