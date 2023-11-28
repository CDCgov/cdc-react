import "./TableBody.scss";

import React from "react";

export interface TableBodyProps {
  children?: React.ReactNode | React.ReactNode[];
  className?: string;
}

export const TableBody = ({
  children,
  ...props
}: TableBodyProps & JSX.IntrinsicElements["tbody"]) => {
  return <tbody {...props}>{children}</tbody>;
};
