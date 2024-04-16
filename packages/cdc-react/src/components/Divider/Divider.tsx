interface DividerProps {
  stroke: string;
  height: number | string;
  width?: number | string;
  className?: string;
}

export const Divider = ({ stroke, height, width, className }: DividerProps) => {
  return (
    <svg
      className={className}
      width={`${width || "auto"}`}
      height={`${height}`}
      viewBox={`0 0 ${width || "auto"} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <line x1="0" y1="0" x2="100%" y2="0" stroke={stroke} />
    </svg>
  );
};
