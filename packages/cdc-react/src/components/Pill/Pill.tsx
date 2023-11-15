import { useState } from "react";
import "./Pill.scss";
import { Icons } from "@us-gov-cdc/cdc-react-icons";
import { Button } from "../Button/Button";

const TRUNCATE_LENGTH = 27;

export const pillVariations = ["default", "toggle", "input", "info"];
type PillVariation = (typeof pillVariations)[number];

export const pillShapes = ["slot", "roundCorners"];
type PillShape = (typeof pillShapes)[number];

export type PillProps = (
  | {
      variation: "toggle";
      onClick: (state: boolean) => void;
    }
  | {
      variation: "input";
      onClose: () => void;
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
};

const defaultProps: PillProps = {
  label: "",
  variation: "default",
  shape: "slot",
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

  if (props.variation === "toggle") {
    const handleClick = () => {
      setIsToggled(!isToggled);
      props.onClick(!isToggled);
    };

    return (
      <button
        className={`${classes} ${isToggled ? "active" : ""}`}
        title={showTitle ? props.label : undefined}
        onClick={handleClick}>
        <span className="label truncate">{props.label}</span>
      </button>
    );
  }

  return (
    <span className={classes} title={showTitle ? props.label : undefined}>
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
          className="usa-button usa-modal__close modal-close-btn"
          onClick={props.onClose}
        />
      )}
    </span>
  );
};

Pill.defaultProps = defaultProps;
