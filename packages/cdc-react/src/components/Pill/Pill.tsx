import { useState } from "react";
import "./Pill.scss";
import { Icons } from "@us-gov-cdc/cdc-react-icons";
import { Button } from "../Button/Button";
import { ColorVariationTypes } from "..";

const TRUNCATE_LENGTH = 27;

export const pillVariations = ["default", "toggle", "input", "info"];
type PillVariation = (typeof pillVariations)[number];

export const pillShapes = ["slot", "roundCorners"];
type PillShape = (typeof pillShapes)[number];

export type PillProps = (
  | {
      variation: "toggle";
      onToggle: (state: boolean) => void;
    }
  | {
      variation: "input";
      onDelete: () => void;
    }
  | {
      variation: "info";
      altText: string;
      icon: React.ReactNode;
      avatar?: undefined;
    }
  | {
      variation: "info";
      avatar: string;
      altText: string;
      icon?: undefined;
    }
  | {
      variation: "info";
      avatar: React.ReactNode;
      altText?: undefined;
      icon?: undefined;
    }
  | { variation: "default" }
) & {
  label: string;
  variation?: PillVariation;
  shape?: PillShape;
  outline?: boolean;
  inverse?: boolean;
  color?: ColorVariationTypes;
};

const defaultProps: PillProps = {
  label: "",
  variation: "default",
  shape: "slot",
  outline: false,
  inverse: false,
  color: "primary",
};

export const Pill = (props: PillProps) => {
  const [isToggled, setIsToggled] = useState(false);

  const showTitle = props.label.length > TRUNCATE_LENGTH;
  let classes = "cdc-react";

  if (props.shape == "roundCorners") {
    classes += ` roundCorners`;
  } else {
    classes += ` slot`;
  }

  if (props.inverse) {
    classes += ` inverse`;
  }

  if (props.variation === "toggle") {
    classes += ` toggle`;

    const handleToggle = () => {
      setIsToggled(!isToggled);
      props.onToggle(!isToggled);
    };

    return (
      <button
        className={`${classes} ${isToggled ? "active" : ""} ${props.color}`}
        title={showTitle ? props.label : undefined}
        onClick={handleToggle}>
        <span className="label truncate">{props.label}</span>
      </button>
    );
  }

  if (props.outline) {
    classes += ` outline`;
  } else {
    classes += ` filled`;
  }

  return (
    <span
      className={`${classes} ${props.color}`}
      title={showTitle ? props.label : undefined}>
      {props.variation === "info" && props.icon}
      {props.variation === "info" &&
        props.avatar &&
        (typeof props.avatar === "string" ? (
          <span className="img-container">
            <img src={props.avatar} alt={props.altText} />
          </span>
        ) : (
          props.avatar
        ))}
      <span className="label truncate">{props.label}</span>
      {props.variation === "input" && (
        <Button
          ariaLabel="Close modal"
          size="tiny"
          iconOnly={true}
          icon={<Icons.Close />}
          variation="unstyled"
          className="usa-button usa-modal__close pill-delete-btn"
          onClick={props.onDelete}
        />
      )}
    </span>
  );
};

Pill.defaultProps = defaultProps;
