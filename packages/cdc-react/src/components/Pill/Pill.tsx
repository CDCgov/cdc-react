import "./Pill.scss";

export const pillShapes = ["slot", "roundCorners"];
type PillShape = (typeof pillShapes)[number];

export interface PillProps {
  text: string;
  shape?: PillShape;
}

export const Pill = ({ text, shape = "slot" }: PillProps) => {
  let classes = "cdc-react";

  if (shape == "roundCorners") {
    classes += ` roundCorners`;
  } else {
    classes += ` slot`;
  }

  return (
    <span className={classes}>
      <span className="content">{text}</span>
    </span>
  );
};
