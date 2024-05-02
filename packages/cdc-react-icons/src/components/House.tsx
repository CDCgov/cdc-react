import { IconProps } from ".";

export const House = ({ className, title }: IconProps) => {
  const defaultTitle = "house-icon";
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.5 20V15H13.5V20H19V13H22L12 3L2 13H5V20H10.5Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
    </svg>
  );
};
