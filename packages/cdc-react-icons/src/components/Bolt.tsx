import { IconProps } from ".";

export const Bolt = ({ className, title }: IconProps) => {
  const defaultTitle = "bolt-icon";
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
        d="M10.1607 3H17.08L13.9369 9.13287H17.1831L7 21L10.4169 11.7692H7L10.1607 3Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
    </svg>
  );
};
