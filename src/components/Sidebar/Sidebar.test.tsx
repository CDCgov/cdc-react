import { cleanup, render, screen } from "@testing-library/react";
import { afterEach } from "vitest";
import { Sidebar } from "./Sidebar";

afterEach(() => {
  cleanup();
});

describe("Sidebar", () => {
  it("should render a button to collapse the sidebar", () => {
    render(<Sidebar isVisible={false} sections={[]} />);

    expect(screen.getByText("Sidebar")).toBeInTheDocument();
  });
});