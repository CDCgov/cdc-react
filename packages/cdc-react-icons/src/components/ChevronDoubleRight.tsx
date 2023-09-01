import { IconProps } from ".";

export const ChevronDoubleRight = ({ className }: IconProps) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none">
      <path
        d="M7 11L12 6L7 1M1 11L6 6L1 1"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
};
