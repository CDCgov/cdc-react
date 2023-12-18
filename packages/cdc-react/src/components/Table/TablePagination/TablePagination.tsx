import "./TablePagination.scss";

import React from "react";
import { useState, useMemo, useEffect } from "react";

export interface TablePaginationProps {
  children?: React.ReactNode | React.ReactNode[];
  className?: string;
  data: never[];
  pageLimit: number;
  setPageData: React.Dispatch<React.SetStateAction<never[]>>;
}

export const TablePagination = ({
  children,
  ...props
}: TablePaginationProps & JSX.IntrinsicElements["table"]) => {
  const { data, pageLimit, setPageData } = props;

  const [pageCount, setPageCount] = useState(
    Math.round(data.length / pageLimit)
  );
  const [currentPage, setCurrentPage] = useState(0);
  const [pages, setPages] = useState<number[]>([]);

  useEffect(() => {
    const currentIndex: number =
      (currentPage === 0 ? 0 : currentPage) * pageLimit;

    const splicedData: never[] = [];

    for (let index = currentIndex; index < currentIndex + pageLimit; index++) {
      const item = data[index];
      console.log(index, data);
      splicedData.push(item);
    }
    const pagesArr = [];

    for (let index = 0; index < pageCount; index++) {
      pagesArr.push(index + 1);
    }

    setPages(pagesArr);
    setPageData(splicedData);
  }, [data, currentPage]);

  return (
    <div className={`cdc-react pagination ${props.className}`}>
      {
        <>
          {currentPage + 1 > 1 && <span className="pevious">Pevious</span>}
          {pages.map((item: number, index: number) => {
            return (
              <span
                key={`pagebox-${index}`}
                className="pagebox"
                onClick={() => setCurrentPage(item - 1)}>
                {item}
              </span>
            );
          })}
          {currentPage + 1 < pageCount && <span className="next">Next</span>}
        </>
      }
    </div>
  );
};
