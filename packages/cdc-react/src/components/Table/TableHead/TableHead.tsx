import "./TableHead.scss";

import React from "react";

export interface TableHeadProps {
  children?: React.ReactNode | React.ReactNode[];
}

export const TableHead = ({
  children,
  ...props
}: TableHeadProps & JSX.IntrinsicElements["thead"]) => {
  return <thead {...props}>{children}</thead>;
};
