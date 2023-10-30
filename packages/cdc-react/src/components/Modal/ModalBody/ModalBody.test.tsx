import { render } from "@testing-library/react";
import { ModalBody } from "./ModalBody";

describe("ModalBody", () => {
  it("should render text as a child", () => {
    const child = "modal body content";
    const { getByText } = render(<ModalBody>{child}</ModalBody>);
    expect(getByText(child)).toBeInTheDocument();
  });
});
