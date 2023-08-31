import { IconProps } from ".";

export const House = ({ className }: IconProps) => {
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
        d="M10.5 20V15H13.5V20H19V13H22L12 3L2 13H5V20H10.5Z"
        stroke="#333333"
        strokeLinejoin="round"
      />
    </svg>
  );
};
