import { IconProps } from ".";

export const LockShield = ({ className, title }: IconProps) => {
  const defaultTitle = "lock-shield-icon";
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
        d="M10.1888 10.5867V8.74753C10.1888 8.1378 10.4243 7.55303 10.8435 7.12189C11.2627 6.69073 11.8312 6.44852 12.424 6.44852C13.0168 6.44852 13.5853 6.69073 14.0045 7.12189C14.4236 7.55303 14.6591 8.1378 14.6591 8.74753V10.5867M13.4753 20.665L17.6084 18.1503C18.865 17.3857 19.6799 16.0662 19.8009 14.6003L20.5526 5.48804C20.6632 4.14833 19.6057 3 18.2614 3H6.29917C4.95491 3 3.89741 4.14833 4.00794 5.48804L4.7597 14.6003C4.88063 16.0662 5.69559 17.3857 6.95217 18.1503L11.0853 20.665C11.8194 21.1117 12.7412 21.1117 13.4753 20.665ZM9.29476 10.5867H15.5532C16.047 10.5867 16.4472 10.9985 16.4472 11.5063V14.725C16.4472 15.2329 16.047 15.6446 15.5532 15.6446H9.29476C8.80099 15.6446 8.4007 15.2329 8.4007 14.725V11.5063C8.4007 10.9985 8.80099 10.5867 9.29476 10.5867Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
