export interface PillProps {
  text: string;
}

export const Pill = ({ text }: PillProps) => {
  return <div>{text}</div>;
};
