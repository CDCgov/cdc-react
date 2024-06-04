import "./TablePagination.scss";

import { Button } from "../../";
import { Icons } from "@us-gov-cdc/cdc-react-icons";

export interface TablePaginationServerSideProps {
  className?: string;
  currentPage: number;
  numberOfPages: number;
  setCurrentPage: (page: number) => void;
}

export const TablePaginationServerSide = ({
  className = "",
  currentPage,
  numberOfPages,
  setCurrentPage,
}: TablePaginationServerSideProps & JSX.IntrinsicElements["div"]) => {
  const pages = [...Array(numberOfPages).keys()].map((index) => index + 1);

  return (
    <div className={`cdc-react pagination ${className || ""}`}>
      {
        <>
          {currentPage > 1 && (
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
          {pages.map((item: number) => {
            return (
              <Button
                size="tiny"
                variation={(item === currentPage && "filled") || "outline"}
                ariaLabel={`Select page ${item}`}
                key={`pagebox-${item}`}
                className={`pagebox`}
                onClick={() => setCurrentPage(item)}>
                {item}
              </Button>
            );
          })}
          {currentPage < numberOfPages && (
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
