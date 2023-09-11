import { cleanup, render, screen } from "@testing-library/react";
import { afterEach } from "vitest";
import { Card } from "./Card";

afterEach(() => {
  cleanup();
});

describe("Card component", () => {
  it("should render the card component", () => {
    render(
      <Card layout="horizontal">
        <p>Test</p>
      </Card>
    );
    expect(screen.getByText("Test")).toBeInTheDocument();
  });
  it("should render in a horizontal layout", () => {
    render(
      <Card layout="horizontal">
        <p>Horizontal Card</p>
      </Card>
    );
    const card = screen.getByText("Horizontal Card").closest(".card-body");
    expect(card).toHaveClass("horizontal");
  });
  it("should render in a vertical-left layout", () => {
    render(
      <Card layout="vertical-left">
        <p>Vertical Left Card</p>
      </Card>
    );
    const card = screen.getByText("Vertical Left Card").closest(".card-body");
    expect(card).toHaveClass("vertical-left");
  });
  it("should render in a vertical-right layout", () => {
    render(
      <Card layout="vertical-right">
        <p>Vertical Right Card</p>
      </Card>
    );
    const card = screen.getByText("Vertical Right Card").closest(".card-body");
    expect(card).toHaveClass("vertical-right");
  });
});
