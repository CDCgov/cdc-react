import React from "react";

export interface TableHeaderProps {
  children?: React.ReactNode | React.ReactNode[];
  className?: string;
}

export const TableHeader = ({
  children,
  ...props
}: TableHeaderProps & JSX.IntrinsicElements["th"]) => {
  return <th {...props}>{children}</th>;
};
