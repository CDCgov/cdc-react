import { cleanup, render, screen } from "@testing-library/react";
import { afterEach } from "vitest";
import { Sidebar } from "./Sidebar";

afterEach(() => {
  cleanup();
});

describe("Sidebar", () => {
  it("should render", () => {
    render(<Sidebar />);

    expect(screen.getByText("Sidebar")).toBeInTheDocument();
  });
});
