import "./Pill.scss";

export interface PillProps {
  text: string;
}

export const Pill = ({ text }: PillProps) => {
  return (
    <span className="cdc-react">
      <span className="content">{text}</span>
    </span>
  );
};
