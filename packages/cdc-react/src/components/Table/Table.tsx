import "./Table.scss";

import React from "react";

export interface TableProps {
  children?: React.ReactNode | React.ReactNode[];
  className?: string;
}

export const Table = ({
  children,
  ...props
}: TableProps & JSX.IntrinsicElements["table"]) => {
  return (
    <table className={`cdc-react table ${props.className}`}>{children}</table>
  );
};
