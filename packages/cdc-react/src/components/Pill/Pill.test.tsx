import { render, screen } from "@testing-library/react";
import { Pill } from "./Pill";

describe("Pill Component", () => {
  it("should render text", () => {
    render(<Pill text="hello" />);
    expect(screen.getByText("hello")).toBeInTheDocument();
  });

  it("should truncate long text", () => {
    render(<Pill text="This is a long pull that should be truncated" />);
    expect(
      screen.getByTitle("This is a long pull that should be truncated")
    ).toBeInTheDocument();
  });
});
