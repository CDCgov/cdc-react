import { IconProps } from ".";

export const Minus = ({ className, title }: IconProps) => {
  const defaultTitle = "minus-icon";
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
        d="M19.0001 12H12.0001H5.00006"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
};
