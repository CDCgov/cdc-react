import React from "react";

export interface TableRowProps {
  children?: React.ReactNode | React.ReactNode[];
  className?: string;
}

export const TableRow = ({
  children,
  ...props
}: TableRowProps & JSX.IntrinsicElements["tr"]) => {
  return <tr {...props}>{children}</tr>;
};
