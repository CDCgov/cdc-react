import React from "react";

export interface TableDataCellProps {
  children?: React.ReactNode | React.ReactNode[];
  className?: string;
}

export const TableDataCell = ({
  children,
  ...props
}: TableDataCellProps & JSX.IntrinsicElements["td"]) => {
  return <td {...props}>{children}</td>;
};
