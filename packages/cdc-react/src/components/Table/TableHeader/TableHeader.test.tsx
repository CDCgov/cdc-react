import { fireEvent, render, screen } from "@testing-library/react";
import { TableHeader } from "./TableHeader";

describe("TableHeader component", () => {
  it("should render a table with data", () => {
    render(<TableHeader />);
  });
});
