import "./Button.scss";

import {
  ButtonAccessibilityThemeTypes,
  ButtonIconPositionTypes,
  ButtonPrimaryColorTypes,
  ButtonSizeTypes,
  ButtonStateTypes,
  ButtonTertiaryColorTypes,
  ButtonVariationsTypes,
} from "../../@types";

import { MouseEventHandler } from "react";

import { Icon, IconNames } from "../Icon/Icon";

interface ButtonProps {
  children?: React.ReactNode;
  onClick?: MouseEventHandler<HTMLDivElement> | undefined;
  ariaLabel: string;
  className?: string;
  id?: string;
  readonly theme?: ButtonAccessibilityThemeTypes;
  readonly size?: ButtonSizeTypes;
  readonly variation?: ButtonVariationsTypes;
  readonly color?: ButtonPrimaryColorTypes | ButtonTertiaryColorTypes;
  readonly state?: ButtonStateTypes;
  readonly inverse?: boolean;
  readonly iconName?: IconNames;
  readonly iconPosition?: ButtonIconPositionTypes;
  readonly iconOnly?: boolean;
  readonly iconHasBadge?: boolean;
}

export const Button = ({
  children,
  onClick,
  size,
  theme,
  variation,
  color,
  state,
  inverse,
  iconName,
  iconPosition,
  iconOnly,
  iconHasBadge,
  className,
  id,
  ariaLabel,
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

  if (variation !== undefined) {
    classes += ` ${variation}`;
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
    classes += ` has-icon ${iconName}`;
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

  const disabled: boolean = state === "disabled" ? true : false;

  return (
    <div className="cdc-react btn-wrap" onClick={onClick}>
      <button
        aria-label={ariaLabel}
        id={id}
        className={classes}
        disabled={disabled}>
        {iconName && iconPosition === "left" && (
          <Icon name={iconName} className="left-icon" hasBadge={iconHasBadge} />
        )}
        {iconOnly !== true
          ? children
          : iconName && (
              <Icon
                name={iconName}
                className="center"
                hasBadge={iconHasBadge}
              />
            )}
        {iconName && iconPosition === "right" && (
          <Icon
            name={iconName}
            className="right-icon"
            hasBadge={iconHasBadge}
          />
        )}
      </button>
    </div>
  );
};
