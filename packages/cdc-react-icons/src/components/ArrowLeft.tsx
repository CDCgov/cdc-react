import { IconProps } from ".";

export const IconArrowLeft = ({ className }: IconProps) => {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M17 12H7M7 12L11.8276 7M7 12L11.8276 17"
        stroke="#333333"
        strokeLinecap="round"
      />
    </svg>
  );
};
