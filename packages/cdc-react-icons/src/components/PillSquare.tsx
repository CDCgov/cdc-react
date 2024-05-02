import { IconProps } from ".";

export const PillSquare = ({ className, title }: IconProps) => {
  const defaultTitle = "pill-square-icon";
  return (
    <svg
      className={className}
      role="img"
      aria-labelledby={defaultTitle}
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <title id={defaultTitle}>{title ? title : defaultTitle}</title>
      <rect
        x="0.727905"
        y="0.5"
        width="9"
        height="9"
        rx="1"
        fill="currentColor"
      />
    </svg>
  );
};
