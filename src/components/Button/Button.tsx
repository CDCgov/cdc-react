interface ButtonProps {
  children: React.ReactNode;
}

export const Button = ({
  children,
  onClick,
}: ButtonProps & JSX.IntrinsicElements["button"]) => {
  return <button onClick={onClick}>{children}</button>;
};
