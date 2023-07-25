import { cleanup, render, screen } from "@testing-library/react";
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
});
