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
        icon={<Icons.Person />}
        className={className}
      />
    );

    const btn = container.getElementsByClassName(className)[0];
    const btnAriaLabel = btn.getAttribute("aria-label");

    expect(btn).toBeInTheDocument();
    expect(btnAriaLabel).toEqual(ariaLabel);
  });
});
