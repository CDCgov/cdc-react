import { render, screen } from "@testing-library/react";

import { Alert } from "./Alert";

describe("Alert component", () => {
  it("should render an alert with the specified heading", () => {
    render(
      <Alert type="info" heading="Alert with heading">
        This is the alert text
      </Alert>
    );

    expect(screen.getByText("Alert with heading")).toBeInTheDocument();
  });

  it("should render an alert with the specified text", () => {
    render(
      <Alert type="info" heading="Alert with heading">
        Test alert
      </Alert>
    );

    expect(screen.getByText("Test alert")).toBeInTheDocument();
  });

  it("should render correct style for slim alert", () => {
    const { container } = render(
      <Alert type="info" heading="Alert with heading" slim>
        Test alert
      </Alert>
    );

    expect(container?.firstChild?.firstChild).toHaveClass("usa-alert--slim");
  });

  it("should render correct style for fullWidth alert", () => {
    const { container } = render(
      <Alert type="info" heading="Alert with heading" fullWidth>
        Test alert
      </Alert>
    );

    expect(container?.firstChild?.firstChild).toHaveClass("fluid");
  });

  it("should render correct style for noIcon alert", () => {
    const { container } = render(
      <Alert type="info" heading="Alert with heading" noIcon>
        Test alert
      </Alert>
    );

    expect(container?.firstChild?.firstChild).toHaveClass("usa-alert--no-icon");
  });

  it("should render correct style for leftAlign alert", () => {
    const { container } = render(
      <Alert type="info" heading="Alert with heading" leftAlign>
        Test alert
      </Alert>
    );

    expect(container?.firstChild?.firstChild).toHaveClass("left-align");
  });

  it("should render correct style for info alert", () => {
    const { container } = render(
      <Alert type="info" heading="Alert with heading">
        Test alert
      </Alert>
    );

    expect(container?.firstChild?.firstChild).toHaveClass("usa-alert--info");
  });

  it("should render correct style for warning alert", () => {
    const { container } = render(
      <Alert type="warning" heading="Alert with heading">
        Test alert
      </Alert>
    );

    expect(container?.firstChild?.firstChild).toHaveClass("usa-alert--warning");
  });

  it("should render correct style for error alert", () => {
    const { container } = render(
      <Alert type="error" heading="Alert with heading">
        Test alert
      </Alert>
    );

    expect(container?.firstChild?.firstChild).toHaveClass("usa-alert--error");
  });

  it("should render correct style for emergency alert", () => {
    const { container } = render(
      <Alert type="emergency" heading="Alert with heading">
        Test alert
      </Alert>
    );

    expect(container?.firstChild?.firstChild).toHaveClass(
      "usa-alert--emergency"
    );
  });
});
