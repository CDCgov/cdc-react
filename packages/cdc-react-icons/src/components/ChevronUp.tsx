import { IconProps } from ".";

export const ChevronUp = ({ className, title }: IconProps) => {
  const defaultTitle = "chevron-up-icon";
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
      <path d="M17 14L12 9L7 14" stroke="currentColor" strokeLinecap="round" />
    </svg>
  );
};
