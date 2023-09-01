import { IconProps } from "./Icons";

export const ArrowDown = ({ className }: IconProps) => {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 7V17M12 17L7 12.1724M12 17L17 12.1724"
        stroke="#333333"
        strokeLinecap="round"
      />
    </svg>
  );
};
