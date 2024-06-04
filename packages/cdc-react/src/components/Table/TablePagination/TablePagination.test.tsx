import { render, screen } from "@testing-library/react";
import { vi } from "vitest";

import { TablePagination } from "./TablePagination";
import { TablePaginationServerSide } from "./TablePaginationServerSide";

const mockIndexes = [];

for (let index = 0; index < 95; index++) {
  mockIndexes.push(index);
}

const data = mockIndexes.map((item: number) => {
  return {
    index: item,
    checked: false,
    fileName: "Test File Name " + (item + 1),
    event: "Test Event Name " + (item + 1),
    uploadStatus: {
      color: "busy",
      label: "Uploading",
    },
    submitted: {
      when: "Just Now",
      timestamp: "3:45pm 11/17/2023",
    },
    details: "detailed info",
  };
});

describe("TablePagination component", () => {
  it("should render table pagination with a whole number for page count", () => {
    render(<TablePagination pageLimit={10} data={data} />);

    expect(screen.getByText("10")).toBeInTheDocument();
  });

  it("should render server side table pagination with a whole number for page count", () => {
    const onCloseMock = vi.fn();
    render(
      <TablePaginationServerSide
        currentPage={1}
        numberOfPages={10}
        setCurrentPage={onCloseMock}
      />
    );

    expect(screen.getByText("10")).toBeInTheDocument();
  });
});
