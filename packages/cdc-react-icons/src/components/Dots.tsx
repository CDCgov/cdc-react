import { IconProps } from ".";

export const Dots = ({ className }: IconProps) => {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 8C12.55 8 13 7.55 13 7C13 6.45 12.55 6 12 6C11.45 6 11 6.45 11 7C11 7.55 11.45 8 12 8ZM12 11C11.45 11 11 11.45 11 12C11 12.55 11.45 13 12 13C12.55 13 13 12.55 13 12C13 11.45 12.55 11 12 11ZM12 16C11.45 16 11 16.45 11 17C11 17.55 11.45 18 12 18C12.55 18 13 17.55 13 17C13 16.45 12.55 16 12 16Z"
        fill="#333333"
        stroke="#333333"
      />
    </svg>
  );
};
