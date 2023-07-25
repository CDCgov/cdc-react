import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach } from "vitest";
import { Sidebar } from "./Sidebar";

afterEach(() => {
  cleanup();
});

describe("Sidebar", () => {
  it("should render the toggle button", () => {
    render(<Sidebar isVisible={false} sections={[]} />);

    expect(screen.getByLabelText("toggle")).toBeInTheDocument();
  });

  it("should show logout button by default", () => {
    render(<Sidebar isVisible={false} sections={[]} />);

    expect(screen.getByText("Logout")).toBeInTheDocument();
  });

  it("should hide logout button when sidebar collapsed", () => {
    render(<Sidebar isVisible={false} sections={[]} />);

    const toggleBtn = screen.getByLabelText("toggle");
    fireEvent.click(toggleBtn);

    expect(screen.queryByText("Logout")).not.toBeInTheDocument();
  });
});
