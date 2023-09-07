import { cleanup, render } from "@testing-library/react";
import { afterEach } from "vitest";
import { Card } from "./Card";

afterEach(() => {
  cleanup();
});

describe("Card component", () => {
  it("should render the card component", () => {
    render(<Card cardLayout="horizontal" cardAction="test" />);
  });
});
