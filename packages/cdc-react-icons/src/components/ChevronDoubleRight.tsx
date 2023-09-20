import { IconProps } from ".";

export const ChevronDoubleRight = ({ className }: IconProps) => {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M13 17L18 12L13 7M7 17L12 12L7 7"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
};
