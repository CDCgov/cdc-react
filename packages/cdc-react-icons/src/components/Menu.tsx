import { IconProps } from ".";

export const Menu = ({ className, title }: IconProps) => {
  const defaultTitle = "menu-icon";
  return (
    <svg
      className={className}
      role="img"
      aria-labelledby={defaultTitle}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none">
      <title id={defaultTitle}>{title ? title : defaultTitle}</title>
      <path
        d="M5 8H19M5 12H19M5 16H19"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
};
