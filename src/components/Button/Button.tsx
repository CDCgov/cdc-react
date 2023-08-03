import "./Button.scss";

import { GlobalEventHandlerType } from "../../@types";

import { Icon, IconNames } from "../Icon/Icon";

const ButtonAccessibilityThemes = ["primary", "tertiary"] as const;

export type ButtonAccessibilityThemeTypes =
  (typeof ButtonAccessibilityThemes)[number];

const ButtonSizes = ["tiny", "default", "big"] as const;

export type ButtonSizeTypes = (typeof ButtonSizes)[number];

const ButtonStyles = ["filled", "outline", "text", "unstyled"] as const;

export type ButtonStyleTypes = (typeof ButtonStyles)[number];

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

interface ButtonProps {
  children: React.ReactNode;
  onClick: GlobalEventHandlerType;
  className?: string;
  id?: string;
  readonly theme?: ButtonAccessibilityThemeTypes;
  readonly size?: ButtonSizeTypes;
  readonly style?: ButtonStyleTypes;
  readonly color?: ButtonPrimaryColorTypes | ButtonTertiaryColorTypes;
  readonly state?: ButtonStateTypes;
  readonly inverse?: boolean;
  readonly iconName?: IconNames;
  readonly iconPosition?: ButtonIconPositionTypes;
  readonly iconOnly?: boolean;
}

export const Button = ({
  children,
  onClick,
  size,
  theme,
  style,
  color,
  state,
  inverse,
  iconName,
  iconPosition,
  iconOnly,
  className,
  id,
}: ButtonProps & JSX.IntrinsicElements["button"]) => {
  let classes: string = "btn";

  if (size !== undefined) {
    classes += ` ${size}`;
  } else {
    classes += ` default`;
  }
  if (theme !== undefined) {
    classes += ` ${theme}`;
  } else {
    classes += ` primary`;
  }
  if (style !== undefined) {
    classes += ` ${style}`;
  } else {
    classes += ` filled`;
  }
  if (color !== undefined) {
    classes += ` ${color}`;
  }
  if (state !== undefined) {
    classes += ` ${state}`;
  }
  if (inverse === true) {
    classes += ` inverse`;
  }
  if (iconName !== undefined) {
    classes += ` ${iconName}`;
  }
  if (iconPosition !== undefined) {
    classes += ` ${iconPosition}`;
  }
  if (iconOnly === true) {
    classes += " icon-only";
  }
  if (className !== undefined) {
    classes += ` ${className}`;
  }
  return (
    <button id={id} className={classes} onClick={onClick}>
      {iconName && iconPosition === "left" && (
        <Icon name={iconName} className="left" />
      )}
      {iconOnly !== true
        ? children
        : iconName && <Icon name={iconName} className="center" />}
      {iconName && iconPosition === "right" && (
        <Icon name={iconName} className="right" />
      )}
    </button>
  );
};
