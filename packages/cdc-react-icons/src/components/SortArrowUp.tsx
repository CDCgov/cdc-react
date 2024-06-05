import { IconProps } from ".";

export const SortArrowUp = ({ className, title }: IconProps) => {
  const defaultTitle = "sort-arrow-up-icon";
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
        d="M12 5V19M12 5L9 8.10345M12 5L15 8.10345"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
};
