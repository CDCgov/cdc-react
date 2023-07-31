import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

describe("Button component", () => {
  it("should render a button with the specified text", () => {
    render(<Button text="test button" />);

    expect(screen.getByText("test button")).toBeInTheDocument();
  });
});
