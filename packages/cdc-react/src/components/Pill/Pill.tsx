import { useState } from "react";
import "./Pill.scss";

const TRUNCATE_LENGTH = 27;

export const pillShapes = ["slot", "roundCorners"];
type PillShape = (typeof pillShapes)[number];

export type PillProps = (
  | {
      togglable: true;
      onClick: (state: boolean) => void;
    }
  | {
      togglable?: false;
    }
) & {
  label: string;
  shape?: PillShape;
};

const defaultProps: PillProps = {
  label: "",
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

  if (props.togglable) {
    const handleClick = () => {
      setIsToggled(!isToggled);
      props.onClick(!isToggled);
    };

    return (
      <button
        className={`${classes} ${isToggled ? "active" : ""}`}
        title={showTitle ? props.label : undefined}
        onClick={handleClick}>
        <span className="content truncate">{props.label}</span>
      </button>
    );
  }

  return (
    <span className={classes} title={showTitle ? props.label : undefined}>
      <span className="content truncate">{props.label}</span>
    </span>
  );
};

Pill.defaultProps = defaultProps;
