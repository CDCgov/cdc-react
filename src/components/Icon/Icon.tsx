import "./Icon.scss";

const Icons = {
  "chevron-down": () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none">
      <path
        d="M7 10L12 14.5455L17 10"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  ),
  "chevron-up": () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none">
      <path d="M17 14L12 9L7 14" stroke="currentColor" strokeLinecap="round" />
    </svg>
  ),
  "chevron-double-left": () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="24"
      viewBox="0 0 24 24"
      fill="none">
      <path
        d="M12 7L7 12L12 17M18 7L13 12L18 17"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  ),
  "chevron-double-right": () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="13"
      height="12"
      viewBox="0 0 13 12"
      fill="none">
      <path
        d="M7 11L12 6L7 1M1 11L6 6L1 1"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  ),
  dashboard: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none">
      <path
        d="M8 1H1V8H8V1Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 1H12V8H19V1Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 12H12V19H19V12Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 12H1V19H8V12Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  logout: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none">
      <path
        d="M9.52683 5H6C5.44772 5 5 5.44772 5 6V18C5 18.5523 5.44771 19 6 19L9.52683 19M9.43783 12.1872L19.1872 12.1872M19.1872 12.1872L15.9374 15.437M19.1872 12.1872L15.9374 8.93737"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  menu: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none">
      <path
        d="M5 8H19M5 12H19M5 16H19"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  ),
  notifications: (hasBadge?: boolean) => {
    return (
      <svg
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
  },
  process: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none">
      <path
        d="M3 13H7L9.5 6L12.5 16L15.5 9.5L17 13H21"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  quality: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.4833 17.5819C11.8011 17.3901 12.1989 17.3901 12.5167 17.5819L16.151 19.7754C16.9083 20.2325 17.8425 19.5535 17.6416 18.692L16.6771 14.5578C16.5928 14.1963 16.7156 13.8178 16.9962 13.5748L20.2086 10.7919C20.8772 10.2127 20.5198 9.11442 19.6384 9.03964L15.4109 8.68098C15.0413 8.64962 14.7194 8.41629 14.5747 8.07479L12.9207 4.17237C12.5761 3.35934 11.4239 3.35934 11.0793 4.17237L9.42532 8.07479C9.28058 8.41629 8.95871 8.64962 8.58914 8.68098L4.36163 9.03964C3.4802 9.11442 3.1228 10.2127 3.79139 10.7919L7.00379 13.5748C7.28436 13.8178 7.40721 14.1963 7.32287 14.5578L6.35841 18.692C6.15745 19.5535 7.09168 20.2325 7.849 19.7754L11.4833 17.5819Z"
        stroke="currentColor"
      />
    </svg>
  ),
  settings: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none">
      <path
        d="M12 14.4545C13.3556 14.4545 14.4545 13.3556 14.4545 12C14.4545 10.6444 13.3556 9.54545 12 9.54545C10.6444 9.54545 9.54545 10.6444 9.54545 12C9.54545 13.3556 10.6444 14.4545 12 14.4545Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.0545 14.4545C17.9456 14.7013 17.9132 14.9751 17.9613 15.2405C18.0094 15.5059 18.136 15.7508 18.3245 15.9436L18.3736 15.9927C18.5258 16.1447 18.6465 16.3252 18.7288 16.5238C18.8112 16.7225 18.8536 16.9354 18.8536 17.1505C18.8536 17.3655 18.8112 17.5784 18.7288 17.7771C18.6465 17.9758 18.5258 18.1562 18.3736 18.3082C18.2217 18.4604 18.0412 18.581 17.8426 18.6634C17.6439 18.7457 17.4309 18.7881 17.2159 18.7881C17.0009 18.7881 16.7879 18.7457 16.5893 18.6634C16.3906 18.581 16.2101 18.4604 16.0582 18.3082L16.0091 18.2591C15.8162 18.0705 15.5714 17.9439 15.3059 17.8958C15.0405 17.8477 14.7668 17.8802 14.52 17.9891C14.278 18.0928 14.0716 18.265 13.9262 18.4845C13.7809 18.704 13.7029 18.9613 13.7018 19.2245V19.3636C13.7018 19.7976 13.5294 20.2138 13.2225 20.5207C12.9156 20.8276 12.4994 21 12.0655 21C11.6315 21 11.2153 20.8276 10.9084 20.5207C10.6015 20.2138 10.4291 19.7976 10.4291 19.3636V19.29C10.4228 19.0192 10.3351 18.7565 10.1775 18.5362C10.0199 18.3159 9.7997 18.1481 9.54545 18.0545C9.29867 17.9456 9.02494 17.9132 8.75952 17.9613C8.49411 18.0094 8.24919 18.136 8.05636 18.3245L8.00727 18.3736C7.8553 18.5258 7.67483 18.6465 7.47617 18.7288C7.27752 18.8112 7.06459 18.8536 6.84955 18.8536C6.6345 18.8536 6.42157 18.8112 6.22292 18.7288C6.02426 18.6465 5.8438 18.5258 5.69182 18.3736C5.53968 18.2217 5.41898 18.0412 5.33663 17.8426C5.25428 17.6439 5.2119 17.4309 5.2119 17.2159C5.2119 17.0009 5.25428 16.7879 5.33663 16.5893C5.41898 16.3906 5.53968 16.2101 5.69182 16.0582L5.74091 16.0091C5.92953 15.8162 6.05606 15.5714 6.10418 15.3059C6.15231 15.0405 6.11983 14.7668 6.01091 14.52C5.9072 14.278 5.73499 14.0716 5.51548 13.9262C5.29597 13.7809 5.03874 13.7029 4.77545 13.7018H4.63636C4.20238 13.7018 3.78616 13.5294 3.47928 13.2225C3.1724 12.9156 3 12.4994 3 12.0655C3 11.6315 3.1724 11.2153 3.47928 10.9084C3.78616 10.6015 4.20238 10.4291 4.63636 10.4291H4.71C4.98081 10.4228 5.24345 10.3351 5.46379 10.1775C5.68412 10.0199 5.85195 9.7997 5.94545 9.54545C6.05437 9.29867 6.08685 9.02494 6.03873 8.75952C5.99061 8.49411 5.86408 8.24919 5.67545 8.05636L5.62636 8.00727C5.47422 7.8553 5.35352 7.67483 5.27117 7.47617C5.18882 7.27752 5.14644 7.06459 5.14644 6.84955C5.14644 6.6345 5.18882 6.42157 5.27117 6.22292C5.35352 6.02426 5.47422 5.8438 5.62636 5.69182C5.77834 5.53968 5.95881 5.41898 6.15746 5.33663C6.35612 5.25428 6.56905 5.2119 6.78409 5.2119C6.99913 5.2119 7.21207 5.25428 7.41072 5.33663C7.60937 5.41898 7.78984 5.53968 7.94182 5.69182L7.99091 5.74091C8.18374 5.92953 8.42865 6.05606 8.69406 6.10418C8.95948 6.15231 9.23322 6.11983 9.48 6.01091H9.54545C9.78745 5.9072 9.99383 5.73499 10.1392 5.51548C10.2846 5.29597 10.3626 5.03874 10.3636 4.77545V4.63636C10.3636 4.20238 10.536 3.78616 10.8429 3.47928C11.1498 3.1724 11.566 3 12 3C12.434 3 12.8502 3.1724 13.1571 3.47928C13.464 3.78616 13.6364 4.20238 13.6364 4.63636V4.71C13.6374 4.97328 13.7154 5.23051 13.8608 5.45002C14.0062 5.66953 14.2125 5.84174 14.4545 5.94545C14.7013 6.05437 14.9751 6.08685 15.2405 6.03873C15.5059 5.99061 15.7508 5.86408 15.9436 5.67545L15.9927 5.62636C16.1447 5.47422 16.3252 5.35352 16.5238 5.27117C16.7225 5.18882 16.9354 5.14644 17.1505 5.14644C17.3655 5.14644 17.5784 5.18882 17.7771 5.27117C17.9758 5.35352 18.1562 5.47422 18.3082 5.62636C18.4604 5.77834 18.581 5.95881 18.6634 6.15746C18.7457 6.35612 18.7881 6.56905 18.7881 6.78409C18.7881 6.99913 18.7457 7.21207 18.6634 7.41072C18.581 7.60937 18.4604 7.78984 18.3082 7.94182L18.2591 7.99091C18.0705 8.18374 17.9439 8.42865 17.8958 8.69406C17.8477 8.95948 17.8802 9.23322 17.9891 9.48V9.54545C18.0928 9.78745 18.265 9.99383 18.4845 10.1392C18.704 10.2846 18.9613 10.3626 19.2245 10.3636H19.3636C19.7976 10.3636 20.2138 10.536 20.5207 10.8429C20.8276 11.1498 21 11.566 21 12C21 12.434 20.8276 12.8502 20.5207 13.1571C20.2138 13.464 19.7976 13.6364 19.3636 13.6364H19.29C19.0267 13.6374 18.7695 13.7154 18.55 13.8608C18.3304 14.0062 18.1583 14.2125 18.0545 14.4545Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  squareArrowUpRight: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none">
      <path
        d="M5.52683 1L2 1C1.44772 1 1 1.44772 1 2V14C1 14.5523 1.44771 15 2 15L14 15C14.5523 15 15 14.5523 15 14V10.3333M6.25003 9.74999L15 1.00002M15 1.00002V6.83333M15 1.00002L9.16666 1.00001"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  support: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none">
      <path
        d="M9.38097 9.29996C9.59256 8.69847 10.0102 8.19126 10.5599 7.86818C11.1096 7.54511 11.756 7.42701 12.3844 7.5348C13.0129 7.6426 13.5829 7.96933 13.9935 8.45714C14.4042 8.94494 14.6289 9.56233 14.628 10.2C14.628 12 11.928 12.9 11.928 12.9M12 16.5H12.009M12 21C16.9705 21 21 16.9705 21 12C21 7.02943 16.9705 3 12 3C7.02943 3 3 7.02943 3 12C3 16.9705 7.02943 21 12 21Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  user: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none">
      <path
        d="M12.5 13.6C15.1924 13.6 17.375 11.451 17.375 8.8C17.375 6.14903 15.1924 4 12.5 4C9.80761 4 7.625 6.14903 7.625 8.8C7.625 11.451 9.80761 13.6 12.5 13.6ZM12.5 13.6C16.0899 13.6 19 16.4654 19 20M12.5 13.6C8.91015 13.6 6 16.4654 6 20"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
} as const;

export type IconNames = keyof typeof Icons;

interface IconProps {
  name: IconNames;
  hasBadge?: boolean;
  className?: string;
}

export const Icon = ({ ...props }: IconProps) => {
  const { name, hasBadge, className } = props;

  return <span className={className}>{Icons[name](hasBadge)}</span>;
};
