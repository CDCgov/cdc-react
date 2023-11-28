import { fireEvent, render, screen } from "@testing-library/react";
import { TableRow } from "./TableRow";

describe("TableRow component", () => {
  it("should render a table with data", () => {
    render(<TableRow />);
  });
});
