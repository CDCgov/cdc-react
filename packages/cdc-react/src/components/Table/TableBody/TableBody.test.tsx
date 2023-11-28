import { render } from "@testing-library/react";
import { TableBody } from "./TableBody";

describe("TableHeader component", () => {
  it("should render a table with data", () => {
    render(<TableBody />);
  });
});
