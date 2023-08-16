import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach } from "vitest";
import { Sidebar } from "./Sidebar";

afterEach(() => {
  cleanup();
});

describe("Sidebar component", () => {
  it("should render the toggle button", () => {
    render(<Sidebar sections={[]} />);

    expect(screen.getByLabelText("toggle")).toBeInTheDocument();
  });

  it("should show logout button by default", () => {
    render(<Sidebar sections={[]} />);

    expect(screen.getByText("Logout")).toBeInTheDocument();
  });

  it("should hide logout button when sidebar collapsed", () => {
    render(<Sidebar sections={[]} />);

    const toggleBtn = screen.getByLabelText("toggle");
    fireEvent.click(toggleBtn);

    expect(screen.queryByText("Logout")).not.toBeInTheDocument();
  });
});
