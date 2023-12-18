import { render, screen } from "@testing-library/react";

import { TablePagination } from "./TablePagination";

describe("Table pagination component", () => {
  it("should render a pagination component with data", () => {
    render(<TablePagination pageLimit={10} data={[]} setPageData={() => {}} />);
  });
});
