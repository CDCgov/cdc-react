import { IconProps } from ".";

export const ChevronLeft = ({ className, title }: IconProps) => {
  const defaultTitle = "chevron-left-icon";
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
      <path d="M14 7L9 12L14 17" stroke="currentColor" strokeLinecap="round" />
    </svg>
  );
};
