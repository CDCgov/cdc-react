import { IconProps } from ".";

export const IconFilter = ({ className }: IconProps) => {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5 8H19M8 12H16M11 16H13"
        stroke="#333333"
        strokeLinecap="round"
      />
    </svg>
  );
};
