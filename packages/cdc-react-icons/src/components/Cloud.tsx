import { IconProps } from ".";

export const Cloud = ({ className, title }: IconProps) => {
  const defaultTitle = "cloud-icon";
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
        d="M13.0463 6.05587C10.6784 5.72017 8.35737 6.91983 7.26178 9.04573C4.7765 9.18104 2.87147 11.3054 3.00678 13.7907C3.14209 16.276 5.2665 18.181 7.75178 18.0457H17.5018C19.5756 18.1203 21.3172 16.4996 21.3918 14.4257C21.4663 12.3519 19.8456 10.6103 17.7718 10.5357C17.3103 8.18909 15.4142 6.39157 13.0463 6.05587Z"
        stroke="currentColor"
      />
    </svg>
  );
};
