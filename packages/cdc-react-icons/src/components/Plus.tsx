import { IconProps } from ".";

export const Plus = ({ className, title }: IconProps) => {
  const defaultTitle = "plus-icon";
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
        d="M12 5V12M12 12V19M12 12H19M12 12H5"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
};
