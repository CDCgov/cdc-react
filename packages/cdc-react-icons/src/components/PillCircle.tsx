import { IconProps } from ".";

export const PillCircle = ({ className, title }: IconProps) => {
  const defaultTitle = "pill-circle-icon";
  return (
    <svg
      className={className}
      role="img"
      aria-labelledby={defaultTitle}
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <title id={defaultTitle}>{title ? title : defaultTitle}</title>
      <circle cx="5" cy="5" r="5" fill="currentColor" />
    </svg>
  );
};
