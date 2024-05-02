import { IconProps } from ".";

export const ChevronDoubleUp = ({ className, title }: IconProps) => {
  const defaultTitle = "chevron-double-up-icon";
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
        d="M17 17L12 12L7 17M17 11L12 6L7 11"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
};
