import { IconProps } from ".";

export const ExclamationCircle = ({ className, title }: IconProps) => {
  const defaultTitle = "exclamation-circle-icon";
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-labelledby={defaultTitle}>
      <title id={defaultTitle}>{title ? title : defaultTitle}</title>
      <path
        d="M12 8.4V12M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12 15.5C12.1381 15.5 12.25 15.3881 12.25 15.25C12.25 15.1119 12.1381 15 12 15C11.8619 15 11.75 15.1119 11.75 15.25C11.75 15.3881 11.8619 15.5 12 15.5Z"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
