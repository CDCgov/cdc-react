import "./TableRow.scss";

import React from "react";

export interface TableRowProps {
  children?: React.ReactNode | React.ReactNode[];
}

export const TableRow = ({
  children,
  ...props
}: TableRowProps & JSX.IntrinsicElements["tr"]) => {
  return <tr {...props}>{children}</tr>;
};
