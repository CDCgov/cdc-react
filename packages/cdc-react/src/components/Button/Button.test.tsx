import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from "./Button";
import { Icons } from "@us-gov-cdc/cdc-react-icons";

describe("Button component", () => {
  it("should render a button with the specified text", () => {
    render(<Button ariaLabel="test button">test button</Button>);

    expect(screen.getByText("test button")).toBeInTheDocument();
  });

  it("should execute onClick callback", () => {
    let didGetCalled = false;

    render(
      <Button ariaLabel="test button" onClick={() => (didGetCalled = true)}>
        test button
      </Button>
    );
    const btn = screen.getByText("test button");
    fireEvent.click(btn);

    expect(didGetCalled).toBeTruthy();
  });

  it("should execute onClick callback when enter key pressed", () => {
    const clickHandler = () => undefined;

    render(
      <Button ariaLabel="test button" onClick={clickHandler}>
        test button
      </Button>
    );
    const btn = screen.getByText("test button");
    btn.focus();
    fireEvent.keyDown(btn, { key: "Enter", code: "Enter", charCode: 13 });
    expect(clickHandler).toHaveBeenCalled;
  });

  it("should have an icon svg", () => {
    const className = "settings-btn";

    const { container } = render(
      <Button
        ariaLabel="test button"
        iconOnly={true}
        icon={<Icons.Settings />}
        className={className}
      />
    );

    const btn = container.getElementsByClassName(className)[0];
    const btnIcon = btn.getElementsByTagName("svg")[0];

    expect(btn).toBeInTheDocument();
    expect(btnIcon).toBeInTheDocument();
  });

  it("should have a valid aria-label", () => {
    const className = "user-profile-btn";
    const ariaLabel = "user profile button";

    const { container } = render(
      <Button
        ariaLabel={ariaLabel}
        iconOnly={true}
        icon={<Icons.User />}
        className={className}
      />
    );

    const btn = container.getElementsByClassName(className)[0];
    const btnAriaLabel = btn.getAttribute("aria-label");

    expect(btn).toBeInTheDocument();
    expect(btnAriaLabel).toEqual(ariaLabel);
  });

  describe("Display Button Icons", () => {
    it("should show icon to the left of the button text", () => {
      const TestButtonComponent = (
        <Button
          ariaLabel="test button"
          icon={<Icons.BarGraph />}
          iconPosition="left">
          <span>Data</span>
        </Button>
      );

      const { getByText, container } = render(TestButtonComponent);

      const btnText = getByText("Data");
      const btnIcon = container.querySelector("svg");
      const textPrevSibling = btnText.previousSibling;

      expect(btnText).toBeInTheDocument();
      expect(btnIcon).toBeInTheDocument();
      expect(textPrevSibling).toEqual(btnIcon);
    });

    it("should show icon to the right of the button text", () => {
      const TestButtonComponent = (
        <Button
          ariaLabel="test button"
          icon={<Icons.BarGraph />}
          iconPosition="right">
          <span>Data</span>
        </Button>
      );

      const { getByText, container } = render(TestButtonComponent);

      const btnText = getByText("Data");
      const btnIcon = container.querySelector("svg");
      const textNextSibling = btnText.nextSibling;

      expect(btnText).toBeInTheDocument();
      expect(btnIcon).toBeInTheDocument();
      expect(textNextSibling).toEqual(btnIcon);
    });

    it("should show icons on both sides of the button text", () => {
      const TestButtonComponent = (
        <Button
          ariaLabel="test button"
          icon={<Icons.BarGraph />}
          iconPosition="both">
          <span>Data</span>
        </Button>
      );

      const { getByText, container } = render(TestButtonComponent);

      const btnText = getByText("Data");
      const btnIcon = container.querySelector("svg");
      const textPrevSibling = btnText.previousSibling!;
      const textNextSibling = btnText.nextSibling!;

      expect(btnText).toBeInTheDocument();
      expect(btnIcon).toBeInTheDocument();
      expect(textPrevSibling).toEqual(btnIcon);
      expect(textNextSibling).toEqual(btnIcon);
    });
  });
});
