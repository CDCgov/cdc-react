import { IconProps } from ".";

export const ChevronDoubleDown = ({ className }: IconProps) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none">
      <path
        d="M7 7L12 11.5455L17 7M7 13L12 17.5455L17 13"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
};
