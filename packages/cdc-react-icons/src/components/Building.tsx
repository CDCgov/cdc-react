import { IconProps } from ".";

export const Building = ({ className, title }: IconProps) => {
  const defaultTitle = "building-icon";
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
        d="M3 21H20.5263M3.94737 17.2105H19.1055M11.5263 10.5789V17.2105M5.84211 10.5789V17.2105M17.2105 10.5789V17.2105M20.5714 7.71428H3V6.42857L11.5714 3L20.5714 6.42857V7.71428Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
