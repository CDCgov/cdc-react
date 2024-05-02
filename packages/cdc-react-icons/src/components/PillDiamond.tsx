import { IconProps } from ".";

export const PillDiamond = ({ className, title }: IconProps) => {
  const defaultTitle = "pill-diamond-icon";
  return (
    <svg
      className={className}
      role="img"
      aria-labelledby={defaultTitle}
      width="15"
      height="10"
      viewBox="0 0 15 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <title id={defaultTitle}>{title ? title : defaultTitle}</title>
      <rect
        x="9.56891"
        y="0.159058"
        width="6.84618"
        height="6.84618"
        rx="1"
        transform="rotate(45 9.56891 0.159058)"
        fill="currentColor"
      />
    </svg>
  );
};
