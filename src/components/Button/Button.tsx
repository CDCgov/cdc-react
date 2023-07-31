interface ButtonProps {
  text: string;
}

export const Button = ({
  text,
  onClick,
}: ButtonProps & JSX.IntrinsicElements["button"]) => {
  return <button onClick={onClick}>{text}</button>;
};
