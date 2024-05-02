import { IconProps } from ".";

export const ArrowRight = ({ className, title }: IconProps) => {
  const defaultTitle = "arrow-right-icon";
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
        d="M7 12L17 12M17 12L12.1724 17M17 12L12.1724 7"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
};
