import { IconProps } from ".";

export const ChevronDoubleRight = ({ className, title }: IconProps) => {
  const defaultTitle = "chevron-double-right-icon";
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
        d="M13 17L18 12L13 7M7 17L12 12L7 7"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
};
