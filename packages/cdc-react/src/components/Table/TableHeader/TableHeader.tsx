import "./TableHeader.scss";

import React from "react";

export interface TableHeaderProps {
  children?: React.ReactNode | React.ReactNode[];
  className?: string;
  size?: "sm" | "md" | "lg";
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
