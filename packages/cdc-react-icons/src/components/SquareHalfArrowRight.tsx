import { IconProps } from ".";

export const SquareHalfArrowRight = ({ className, title }: IconProps) => {
  const defaultTitle = "square-half-arrow-right-icon";
  return (
    <svg
      className={className}
      role="img"
      aria-labelledby={defaultTitle}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none">
      <title id={defaultTitle}>{title ? title : defaultTitle}</title>
      <path
        d="M9.52683 5H6C5.44772 5 5 5.44772 5 6V18C5 18.5523 5.44771 19 6 19L9.52683 19M9.43783 12.1872L19.1872 12.1872M19.1872 12.1872L15.9374 15.437M19.1872 12.1872L15.9374 8.93737"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
