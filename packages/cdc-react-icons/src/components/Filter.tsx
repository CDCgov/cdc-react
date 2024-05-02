import { IconProps } from ".";

export const Filter = ({ className, title }: IconProps) => {
  const defaultTitle = "filter-icon";
  return (
    <svg
      className={className}
      role="img"
      aria-labelledby={defaultTitle}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <title id={defaultTitle}>{title ? title : defaultTitle}</title>
      <path
        d="M5 8H19M8 12H16M11 16H13"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
};
