import { IconProps } from ".";

export const Star = ({ className, title }: IconProps) => {
  const defaultTitle = "star-icon";
  return (
    <svg
      className={className}
      role="img"
      aria-labelledby={defaultTitle}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none">
      <title id={defaultTitle}>{title ? title : defaultTitle}</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.4833 17.5819C11.8011 17.3901 12.1989 17.3901 12.5167 17.5819L16.151 19.7754C16.9083 20.2325 17.8425 19.5535 17.6416 18.692L16.6771 14.5578C16.5928 14.1963 16.7156 13.8178 16.9962 13.5748L20.2086 10.7919C20.8772 10.2127 20.5198 9.11442 19.6384 9.03964L15.4109 8.68098C15.0413 8.64962 14.7194 8.41629 14.5747 8.07479L12.9207 4.17237C12.5761 3.35934 11.4239 3.35934 11.0793 4.17237L9.42532 8.07479C9.28058 8.41629 8.95871 8.64962 8.58914 8.68098L4.36163 9.03964C3.4802 9.11442 3.1228 10.2127 3.79139 10.7919L7.00379 13.5748C7.28436 13.8178 7.40721 14.1963 7.32287 14.5578L6.35841 18.692C6.15745 19.5535 7.09168 20.2325 7.849 19.7754L11.4833 17.5819Z"
        stroke="currentColor"
      />
    </svg>
  );
};
