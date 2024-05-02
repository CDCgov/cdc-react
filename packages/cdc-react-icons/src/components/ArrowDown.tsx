import { IconProps } from ".";

export const ArrowDown = ({ className, title }: IconProps) => {
  const defaultTitle = "arrow-down-icon";
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
        d="M12 7V17M12 17L7 12.1724M12 17L17 12.1724"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
};
