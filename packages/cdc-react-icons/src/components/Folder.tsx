import { IconProps } from ".";

export const Folder = ({ className }: IconProps) => {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M21 18.4C21 18.8774 20.8104 19.3352 20.4728 19.6728C20.1352 20.0104 19.6774 20.2 19.2 20.2H4.8C4.32261 20.2 3.86477 20.0104 3.52721 19.6728C3.18964 19.3352 3 18.8774 3 18.4V5.8C3 5.32261 3.18964 4.86477 3.52721 4.52721C3.86477 4.18964 4.32261 4 4.8 4H9.3L11.1 6.7H19.2C19.6774 6.7 20.1352 6.88964 20.4728 7.22721C20.8104 7.56477 21 8.02261 21 8.5V18.4Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
