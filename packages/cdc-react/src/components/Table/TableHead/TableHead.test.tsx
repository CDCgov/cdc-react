import { fireEvent, render, screen } from "@testing-library/react";
import { TableHead } from "./TableHead";

describe("TableHead component", () => {
  it("should render a table with data", () => {
    render(<TableHead />);
  });
});
