import "./TableDataCell.scss";

import React from "react";

export interface TableDataCellProps {
  children?: React.ReactNode | React.ReactNode[];
  className?: string;
  size?: "sm" | "md" | "lg";
}

export const TableDataCell = ({
  children,
  ...props
}: TableDataCellProps & JSX.IntrinsicElements["td"]) => {
  return (
    <td
      className={`${props.className} ${
        props.size === "sm"
          ? "width-10"
          : props.size === "md"
          ? "width-15"
          : "width-card"
      }`}>
      {children}
    </td>
  );
};
