import { IconProps } from ".";

export const ChevronDoubleLeft = ({ className, title }: IconProps) => {
  const defaultTitle = "chevron-double-left-icon";
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
        d="M12 7L7 12L12 17M18 7L13 12L18 17"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
};
