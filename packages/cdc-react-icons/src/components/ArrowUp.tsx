import { IconProps } from ".";

export const ArrowUp = ({ className, title }: IconProps) => {
  const defaultTitle = "arrow-up-icon";
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
        d="M12 17V7M12 7L17 11.8276M12 7L7 11.8276"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
};
