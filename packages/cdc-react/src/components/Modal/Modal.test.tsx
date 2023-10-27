import { fireEvent, render } from "@testing-library/react";
import { Modal } from "./Modal";
import { vi } from "vitest";

describe("Modal component", () => {
  it("should render the modal component with text inside", () => {
    const { getByText } = render(
      <Modal isOpen={true} onClose={() => {}}>
        Modal
      </Modal>
    );

    expect(getByText("Modal")).toBeVisible();
  });

  it("should not render the modal component when isOpen is false", () => {
    const { queryByText } = render(
      <Modal isOpen={false} onClose={() => {}}>
        Modal
      </Modal>
    );
    expect(queryByText("Modal")).toBeNull();
  });

  it("should call onClose when modal close button is clicked", () => {
    const onCloseMock = vi.fn();

    const { container } = render(
      <Modal isOpen={true} onClose={onCloseMock}>
        Modal
      </Modal>
    );
    const closeButton = container.querySelector(".modal-close-btn");
    if (!closeButton) {
      throw new Error("button not found");
    }

    fireEvent.click(closeButton);

    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });
});
