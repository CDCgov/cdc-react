import { IconProps } from ".";

export const ChevronRight = ({ className, title }: IconProps) => {
  const defaultTitle = "chevron-right-icon";
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
      <path d="M9 17L14 12L9 7" stroke="currentColor" strokeLinecap="round" />
    </svg>
  );
};
