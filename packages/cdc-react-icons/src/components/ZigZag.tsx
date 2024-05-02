import { IconProps } from ".";

export const ZigZag = ({ className, title }: IconProps) => {
  const defaultTitle = "zig-zag-icon";
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
      <path
        d="M3 13H7L9.5 6L12.5 16L15.5 9.5L17 13H21"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
