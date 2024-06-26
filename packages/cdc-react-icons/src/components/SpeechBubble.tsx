import { IconProps } from ".";

export const SpeechBubble = ({ className, title }: IconProps) => {
  const defaultTitle = "speech-bubble-icon";
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
        d="M20 11.5556C20.003 12.7288 19.729 13.8861 19.2 14.9333C18.5728 16.1883 17.6087 17.2437 16.4154 17.9816C15.2223 18.7195 13.8473 19.1106 12.4444 19.1111C11.2712 19.1142 10.1139 18.8401 9.06666 18.3111L4 20L5.68889 14.9333C5.15994 13.8861 4.88583 12.7288 4.88889 11.5556C4.88943 10.1527 5.28054 8.77767 6.01841 7.58451C6.75629 6.39136 7.81177 5.4272 9.06666 4.80003C10.1139 4.27107 11.2712 3.99697 12.4444 4.00003H12.8889C14.7416 4.10224 16.4915 4.88426 17.8036 6.19635C19.1157 7.50843 19.8978 9.25838 20 11.1111V11.5556Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
