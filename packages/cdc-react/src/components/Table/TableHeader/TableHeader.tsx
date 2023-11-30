import "./TableHeader.scss";

import { TableColumnTypes } from "../../../@types";

import React from "react";

export interface TableHeaderProps {
  children?: React.ReactNode | React.ReactNode[];
  className?: string;
  size?: TableColumnTypes;
}

export const TableHeader = ({
  children,
  ...props
}: TableHeaderProps & JSX.IntrinsicElements["th"]) => {
  return (
    <th
      className={`${props.className} ${
        props.size === "sm"
          ? "width-10"
          : props.size === "md"
          ? "width-15"
          : "width-card"
      }`}>
      {children}
    </th>
  );
};
