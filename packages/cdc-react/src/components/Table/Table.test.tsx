import { render } from "@testing-library/react";
import { Table } from "./Table";

describe("Table component", () => {
  it("should render a table with data", () => {
    render(<Table />);
  });
});
