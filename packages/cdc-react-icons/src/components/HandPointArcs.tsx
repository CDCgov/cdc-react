import { IconProps } from ".";

export const HandPointArcs = ({ className, title }: IconProps) => {
  const defaultTitle = "hand-point-arcs-icon";
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
        d="M10.5 17V13.5M10.5 13.5V9C10.5 9 10.5 7.5 12 7.5C13.5 7.5 13.5 9 13.5 9C13.5 9 13.75 13 14 13.5C14.25 14 16.6667 14.5 17 15.5C17.3333 16.5 16.7629 19.7371 16 20.5C15.2371 21.2629 11 21.1667 9.99999 20.5C8.99999 19.8333 8.49999 17.5 8.49999 16.5C8.49999 15.5 10.5 13.5 10.5 13.5ZM17.5 5.6694C16.2182 4.04367 14.231 3 12 3C9.76904 3 7.78183 4.04367 6.5 5.6694M9.00921 6C9.84888 5.37101 10.8824 5 12 5C13.1176 5 14.1603 5.37101 15 6"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
};
