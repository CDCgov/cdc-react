import { IconProps } from "./Icons";

export const Meter = ({ className }: IconProps) => {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7.5 15H3.51212C3.18046 14.0617 3 13.0519 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 13.0519 20.8195 14.0617 20.4879 15H16.5M13 13L15 10M16 7.5L16.5 7M12 6V5.125M8 7.5L7.5 7M14 15C14 16.1046 13.1046 17 12 17C10.8954 17 10 16.1046 10 15C10 13.8954 10.8954 13 12 13C13.1046 13 14 13.8954 14 15Z"
        stroke="#333333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
