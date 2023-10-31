import { render } from "@testing-library/react";
import { ModalFooter } from "./ModalFooter";
import { Button } from "../../Button/Button";

describe("ModalFooter", () => {
  it("should render text as a child", () => {
    const child = "modal body content";
    const { getByText } = render(<ModalFooter>{child}</ModalFooter>);
    expect(getByText(child)).toBeInTheDocument();
  });

  it("should render a button as a child", () => {
    const child = <Button ariaLabel="modal button" />;
    const { container } = render(<ModalFooter>{child}</ModalFooter>);
    expect(container.querySelector("button")).toBeInTheDocument();
  });
});
