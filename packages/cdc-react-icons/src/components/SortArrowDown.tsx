import { IconProps } from ".";

export const SortArrowDown = ({ className, title }: IconProps) => {
  const defaultTitle = "sort-arrow-down-icon";
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
        d="M12 5V19M12 19L9 16.1034M12 19L15 16.1034"
        stroke="currentColor"
        stroke-linecap="round"
      />
    </svg>
  );
};
