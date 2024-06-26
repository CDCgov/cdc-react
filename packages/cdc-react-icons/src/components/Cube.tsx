import { IconProps } from ".";

export const Cube = ({ className, title }: IconProps) => {
  const defaultTitle = "cube-icon";
  return (
    <svg
      className={className}
      role="img"
      aria-labelledby={defaultTitle}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <title id={defaultTitle}>{title ? title : defaultTitle}</title>
      <path
        d="M4.24207 7.44486L12.0685 11.9722L19.895 7.44486M12.0685 21V11.9633M20.137 15.5492V8.37717C20.1367 8.06275 20.0537 7.75393 19.8963 7.48171C19.739 7.2095 19.5128 6.98343 19.2405 6.82622L12.965 3.24022C12.6925 3.08285 12.3833 3 12.0685 3C11.7538 3 11.4445 3.08285 11.172 3.24022L4.8965 6.82622C4.6242 6.98343 4.39803 7.2095 4.24067 7.48171C4.08332 7.75393 4.00032 8.06275 4 8.37717V15.5492C4.00032 15.8636 4.08332 16.1724 4.24067 16.4446C4.39803 16.7169 4.6242 16.9429 4.8965 17.1001L11.172 20.6861C11.4445 20.8435 11.7538 20.9264 12.0685 20.9264C12.3833 20.9264 12.6925 20.8435 12.965 20.6861L19.2405 17.1001C19.5128 16.9429 19.739 16.7169 19.8963 16.4446C20.0537 16.1724 20.1367 15.8636 20.137 15.5492Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
