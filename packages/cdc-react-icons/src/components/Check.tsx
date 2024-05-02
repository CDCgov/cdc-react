import { IconProps } from ".";

export const Check = ({ className, title }: IconProps) => {
  const defaultTitle = "check-icon";
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
        d="M5 12.9091L9.06452 17L19 7"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
};
