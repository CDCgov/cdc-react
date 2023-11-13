import "./Pill.scss";

const TRUNCATE_LENGTH = 27;

export const pillShapes = ["slot", "roundCorners"];
type PillShape = (typeof pillShapes)[number];

export interface PillProps {
  text: string;
  shape?: PillShape;
}

export const Pill = ({ text, shape = "slot" }: PillProps) => {
  const showTitle = text.length > TRUNCATE_LENGTH;
  let classes = "cdc-react";

  if (shape == "roundCorners") {
    classes += ` roundCorners`;
  } else {
    classes += ` slot`;
  }

  return (
    <span className={classes} title={showTitle ? text : undefined}>
      <span className="content truncate">{text}</span>
    </span>
  );
};
