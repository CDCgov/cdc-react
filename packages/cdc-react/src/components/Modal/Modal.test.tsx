import { render, screen } from "@testing-library/react";
import { Modal } from "./Modal";

describe("Modal component", () => {
  it("should render the modal component", () => {
    render(<Modal />);
    expect(screen.getByText("Modal")).toBeInTheDocument();
  });
});
