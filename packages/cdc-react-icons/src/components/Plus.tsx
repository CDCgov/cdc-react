import { IconProps } from ".";

export const Plus = ({ className }: IconProps) => {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 5V12M12 12V19M12 12H19M12 12H5"
        stroke="#333333"
        strokeLinecap="round"
      />
    </svg>
  );
};
