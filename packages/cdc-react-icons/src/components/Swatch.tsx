import { IconProps } from "./Icons";

export const Swatch = ({ className }: IconProps) => {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3 17.5L3 4C3 3.44772 3.44772 3 4 3H9C9.55228 3 10 3.44772 10 4V9.02107M3 17.5C3 15.567 4.567 14 6.5 14L20 14C20.5523 14 21 14.4477 21 15V20C21 20.5523 20.5523 21 20 21H6.5C4.567 21 3 19.433 3 17.5ZM14.8995 14L19.2426 9.65686C19.6332 9.26633 19.6332 8.63317 19.2426 8.24264L15.7071 4.70711C15.3166 4.31658 14.6834 4.31658 14.2929 4.70711L4 15.0505"
        stroke="#333333"
        strokeLinecap="round"
      />
    </svg>
  );
};
