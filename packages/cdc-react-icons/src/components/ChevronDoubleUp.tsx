import { IconProps } from ".";

export const ChevronDoubleUp = ({ className }: IconProps) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none">
      <path
        d="M17 17L12 12L7 17M17 11L12 6L7 11"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
};
