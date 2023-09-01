import { IconProps } from "./Icons";

export const ArrowUp = ({ className }: IconProps) => {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 17V7M12 7L17 11.8276M12 7L7 11.8276"
        stroke="#333333"
        strokeLinecap="round"
      />
    </svg>
  );
};
