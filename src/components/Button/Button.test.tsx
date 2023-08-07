import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from "./Button";

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

  it("should have an icon svg", () => {
    const className = "settings-btn";

    const { container } = render(
      <Button
        ariaLabel="test button"
        iconOnly={true}
        iconName="settings"
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
        iconName="user"
        className={className}
      />
    );

    const btn = container.getElementsByClassName(className)[0];
    const btnAriaLabel = btn.getAttribute("aria-label");

    expect(btn).toBeInTheDocument();
    expect(btnAriaLabel).toEqual(ariaLabel);
  });
});
