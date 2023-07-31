interface ButtonProps {
  text: string;
}

export const Button = ({ text }: ButtonProps) => {
  return <button>{text}</button>;
};
