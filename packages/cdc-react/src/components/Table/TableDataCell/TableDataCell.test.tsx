import { fireEvent, render, screen } from "@testing-library/react";
import { TableDataCell } from "./TableDataCell";

describe("TableDataCell component", () => {
  it("should render a table with data", () => {
    render(<TableDataCell />);
  });
});
