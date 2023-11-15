import { fireEvent, render, screen } from "@testing-library/react";
import { Pill } from "./Pill";

describe("Pill Component", () => {
  it("should render text", () => {
    render(<Pill label="hello" />);
    expect(screen.getByText("hello")).toBeInTheDocument();
  });

  it("should truncate long text", () => {
    render(<Pill label="This is a long pull that should be truncated" />);
    expect(
      screen.getByTitle("This is a long pull that should be truncated")
    ).toBeInTheDocument();
  });

  describe("Togglable", () => {
    it("should call onClick callback", () => {
      let didGetCalled = false;
      const callback = () => (didGetCalled = true);

      render(<Pill label="click me" variation="toggle" onClick={callback} />);

      const pill = screen.getByText("click me");
      fireEvent.click(pill);

      expect(didGetCalled).toBeTruthy;
    });
  });

  describe("Input", () => {
    it("should render close icon", () => {
      let testVal = false;
      const { container } = render(
        <Pill
          label="option 1"
          variation="input"
          onClose={() => (testVal = true)}
        />
      );
      // const pill = screen.getByText("option 1");
      const closeBtn = container.getElementsByTagName("button")[0];
      expect(closeBtn).toBeInTheDocument();

      fireEvent.click(closeBtn);

      expect(testVal).toBeTruthy();
    });
  });
});
