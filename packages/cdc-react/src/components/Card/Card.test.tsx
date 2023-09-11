import { cleanup, render, screen } from "@testing-library/react";
import { afterEach } from "vitest";
import { Card } from "./Card";

afterEach(() => {
  cleanup();
});

describe("Card component", () => {
  it("should render the card component", () => {
    render(<Card layout="horizontal"><p>Test</p></Card>);
    expect(screen.getByText("Test")).toBeInTheDocument();
  });
});
