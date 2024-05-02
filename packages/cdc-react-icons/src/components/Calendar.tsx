import { IconProps } from ".";

export const Calendar = ({ className, title }: IconProps) => {
  const defaultTitle = "calendar-icon";
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
        d="M15.5556 3V6.6M8.44444 3V6.6M4 10.2H20M18.2222 4.8H5.77778C4.79594 4.8 4 5.60589 4 6.6V19.2C4 20.1941 4.79594 21 5.77778 21H18.2222C19.2041 21 20 20.1941 20 19.2V6.6C20 5.60589 19.2041 4.8 18.2222 4.8Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
