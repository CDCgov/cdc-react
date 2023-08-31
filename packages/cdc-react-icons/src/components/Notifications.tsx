import { IconProps } from ".";

export const Notifications = ({ hasBadge, className }: IconProps) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none">
      <path
        d="M13.5378 20.103C13.3815 20.3758 13.1572 20.6023 12.8873 20.7597C12.6174 20.9171 12.3115 21 12 21C11.6885 21 11.3826 20.9171 11.1127 20.7597C10.8428 20.6023 10.6185 20.3758 10.4622 20.103M17.3333 8.40095C17.3333 6.96852 16.7715 5.59478 15.7712 4.5819C14.771 3.56903 13.4145 3 12 3C10.5855 3 9.22896 3.56903 8.22876 4.5819C7.22857 5.59478 6.66667 6.96852 6.66667 8.40095C6.66667 14.702 4 16.5024 4 16.5024H20C20 16.5024 17.3333 14.702 17.3333 8.40095Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        style={{ display: hasBadge ? "flex" : "none" }}
        cx="17"
        cy="4"
        r="4"
        fill="#AF4448"
      />
    </svg>
  );
};
