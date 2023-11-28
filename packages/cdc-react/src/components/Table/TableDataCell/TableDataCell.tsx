import "./TableDataCell.scss";

import React from "react";

export interface TableDataCellProps {
  children?: React.ReactNode | React.ReactNode[];
}

export const TableDataCell = ({
  children,
  ...props
}: TableDataCellProps & JSX.IntrinsicElements["td"]) => {
  return <th {...props}>{children}</th>;
};
