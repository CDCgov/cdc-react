import { IconProps } from "./Icons";

export const ChevronUp = ({ className }: IconProps) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none">
      <path d="M17 14L12 9L7 14" stroke="currentColor" strokeLinecap="round" />
    </svg>
  );
};
