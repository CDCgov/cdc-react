import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from "./Button";

describe("Button component", () => {
  it("should render a button with the specified text", () => {
    render(<Button>test button</Button>);

    expect(screen.getByText("test button")).toBeInTheDocument();
  });

  it("should execute onClick callback", () => {
    let didGetCalled = false;

    render(<Button onClick={() => (didGetCalled = true)}>test button</Button>);
    const btn = screen.getByText("test button");
    fireEvent.click(btn);

    expect(didGetCalled).toBeTruthy();
  });
});
