import { IconProps } from ".";

export const Search = ({ className, title }: IconProps) => {
  const defaultTitle = "search-icon";
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
        d="M13.8667 13.8667L19 19M15.2667 10.1333C15.2667 12.9684 12.9684 15.2667 10.1333 15.2667C7.29827 15.2667 5 12.9684 5 10.1333C5 7.29827 7.29827 5 10.1333 5C12.9684 5 15.2667 7.29827 15.2667 10.1333Z"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
};
