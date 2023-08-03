import "./Button.scss";

import { GlobalEventHandlerType } from "../../@types";

import { IconNames } from "../Icon/Icon";

const ButtonStyles = [
  "filled", 
  "outline", 
  "text", 
  "unstyled"
] as const;

export type ButtonStyleTypes = keyof typeof ButtonStyles;

const ButtonStates = [
  "default", 
  "hover", 
  "active", 
  "focus", 
  "disabled"
] as const;

export type ButtonStateTypes = keyof typeof ButtonStates;

const ButtonSizes = [
  "tiny", 
  "default", 
  "big"
] as const;

export type ButtonSizeTypes = keyof typeof ButtonSizes;

const ButtonIconPositions = [
  "left", 
  "right", 
] as const;

export type ButtonIconPositionTypes = keyof typeof ButtonIconPositions;

const ButtonAccessibilityThemes = [
  "primary",
  "tertiary"
] as const;

export type ButtonAccessibilityThemeTypes = keyof typeof ButtonAccessibilityThemes;

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

export type ButtonPrimaryColorTypes = keyof typeof ButtonPrimaryColors;

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
  "teal"
] as const;

export type ButtonTertiaryColorTypes = keyof typeof ButtonPrimaryColors;

interface ButtonProps {
  children: React.ReactNode;
  onClick: GlobalEventHandlerType;
  size: ButtonSizeTypes;
  style: ButtonStyleTypes;
  theme?: ButtonAccessibilityThemeTypes; 
  color?: ButtonPrimaryColorTypes | ButtonTertiaryColorTypes; 
  state?: ButtonStateTypes;
  inverse?: boolean;
  iconName?: IconNames;
  iconPosition?: ButtonIconPositionTypes;
  iconOnly?: boolean;
  className?: string;
  id?: string;
}

export const Button = ({
  children,
  onClick,
}: ButtonProps & JSX.IntrinsicElements["button"]) => {
  return <button onClick={onClick}>{children}</button>;
};
