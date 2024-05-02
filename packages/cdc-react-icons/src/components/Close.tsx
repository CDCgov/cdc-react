import { IconProps } from ".";

export const Close = ({ className, title }: IconProps) => {
  const defaultTitle = "close-icon";
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
        d="M7 7L17 17M17 7L7 17"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
};
