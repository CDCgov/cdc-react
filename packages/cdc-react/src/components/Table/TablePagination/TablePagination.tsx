import "./TablePagination.scss";

import React from "react";
import { useState, useEffect } from "react";

import { Button } from "../../";
import { Icons } from "@us-gov-cdc/cdc-react-icons";

export interface TablePaginationProps {
  className?: string;
  data: never[];
  pageLimit: number;
  setPageData: React.Dispatch<React.SetStateAction<never[]>>;
}

export const TablePagination = ({
  ...props
}: TablePaginationProps & JSX.IntrinsicElements["table"]) => {
  const { data, pageLimit, setPageData } = props;

  const [pageCount] = useState(Math.round(data.length / pageLimit));
  const [currentPage, setCurrentPage] = useState(0);
  const [pages, setPages] = useState<number[]>([]);

  useEffect(() => {
    const currentIndex: number =
      (currentPage === 0 ? 0 : currentPage) * pageLimit;

    const splicedData: never[] = [];

    for (let index = currentIndex; index < currentIndex + pageLimit; index++) {
      const item = data[index];
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
    <div className={`cdc-react pagination ${props.className || ""}`}>
      {
        <>
          {currentPage + 1 > 1 && (
            <>
              <Button
                variation="unstyled"
                ariaLabel="Previous page"
                className="previous"
                onClick={() => setCurrentPage(currentPage - 1)}>
                <Icons.ChevronLeft />
                Pevious
              </Button>
            </>
          )}
          {pages.map((item: number, index: number) => {
            return (
              <Button
                size="tiny"
                variation={(item === currentPage + 1 && "filled") || "outline"}
                ariaLabel={`Select page ${item}`}
                key={`pagebox-${index}`}
                className={`pagebox`}
                onClick={() => setCurrentPage(item - 1)}>
                {item}
              </Button>
            );
          })}
          {currentPage + 1 < pageCount && (
            <>
              <Button
                variation="unstyled"
                ariaLabel={`Next page`}
                className="next"
                onClick={() => setCurrentPage(currentPage + 1)}>
                Next
                <Icons.ChevronRight />
              </Button>
            </>
          )}
        </>
      }
    </div>
  );
};
