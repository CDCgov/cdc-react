import { IconProps } from ".";

export const ArrowLeft = ({ className, title }: IconProps) => {
  const defaultTitle = "arrow-left-icon";
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
        d="M17 12H7M7 12L11.8276 7M7 12L11.8276 17"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
};
