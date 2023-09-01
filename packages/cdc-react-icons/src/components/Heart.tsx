import { IconProps } from "./Icons";

export const Heart = ({ className }: IconProps) => {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4.54416 5.54416C2.48528 7.60303 2.48528 10.9411 4.54416 13C4.47927 13.0649 9.35045 17.8604 12 20.4558C14.6496 17.8604 19.5207 13.0649 19.4558 13C21.5147 10.9411 21.5147 7.60303 19.4558 5.54416C17.397 3.48529 14.0589 4.48529 12 6.54416C9.94113 4.48529 6.60303 3.48529 4.54416 5.54416Z"
        stroke="#333333"
      />
    </svg>
  );
};
