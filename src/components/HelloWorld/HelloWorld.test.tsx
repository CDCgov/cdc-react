import { cleanup, render, screen } from "@testing-library/react";
import { afterEach } from "vitest";
import { HelloWorld } from "./HelloWorld";

afterEach(() => {
  cleanup();
});

describe("HelloWorld", () => {
  it("should render", () => {
    render(<HelloWorld />);

    expect(screen.getByText("Hello World")).toBeInTheDocument();
  });
});
