import { IconProps } from "./Icons";

export const PaperLines = ({ className }: IconProps) => {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14 3H6.8C6.32261 3 5.86477 3.18964 5.52721 3.52721C5.18964 3.86477 5 4.32261 5 4.8V19.2C5 19.6774 5.18964 20.1352 5.52721 20.4728C5.86477 20.8104 6.32261 21 6.8 21H17.6C18.0774 21 18.5352 20.8104 18.8728 20.4728C19.2104 20.1352 19.4 19.6774 19.4 19.2V8.4M14 3L19.4 8.4M14 3V8.4H19.4M15.8 12.9H8.6M15.8 16.5H8.6M10.4 9.3H8.6"
        stroke="#333333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
