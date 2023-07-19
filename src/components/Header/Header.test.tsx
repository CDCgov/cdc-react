import { cleanup, render, screen } from "@testing-library/react";
import { afterEach } from "vitest";
import { Header } from "./Header";

afterEach(() => {
  cleanup();
});

describe("HelloWorld", () => {
  it("should render", () => {
    render(<Header />);

    expect(screen.getByText("Hello World")).toBeInTheDocument();
  });
});
