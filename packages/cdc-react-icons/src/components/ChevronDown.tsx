import { IconProps } from ".";

export const ChevronDown = ({ className, title }: IconProps) => {
  const defaultTitle = "chevron-down-icon";
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
        d="M7 10L12 14.5455L17 10"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
};
