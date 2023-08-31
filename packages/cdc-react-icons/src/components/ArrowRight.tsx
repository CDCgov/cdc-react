import { IconProps } from ".";

export const ArrowRight = ({ className }: IconProps) => {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7 12L17 12M17 12L12.1724 17M17 12L12.1724 7"
        stroke="#333333"
        strokeLinecap="round"
      />
    </svg>
  );
};
