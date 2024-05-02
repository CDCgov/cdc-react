import { IconProps } from ".";

export const SquareArrowUpRight = ({ className, title }: IconProps) => {
  const defaultTitle = "square-arrow-up-right-icon";
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
        d="M5.52683 1L2 1C1.44772 1 1 1.44772 1 2V14C1 14.5523 1.44771 15 2 15L14 15C14.5523 15 15 14.5523 15 14V10.3333M6.25003 9.74999L15 1.00002M15 1.00002V6.83333M15 1.00002L9.16666 1.00001"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
