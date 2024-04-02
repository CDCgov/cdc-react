import { render } from "@testing-library/react";
import { ProgressTracker } from "./ProgressTracker";

describe("ProgressTracker component", () => {
  it("should render label text when given", () => {
    const { getByText } = render(<ProgressTracker label="Stage: Uploading" />);

    expect(getByText("Stage: Uploading")).toBeVisible();
  });

  it("should render percentage when current and total amount are given", () => {
    const { getByText } = render(
      <ProgressTracker
        currentAmount={50}
        totalAmount={100}
        label="Stage: Uploading"
      />
    );
    expect(getByText("50% complete")).toBeVisible();
  });

  it("should render current and total amount when given", () => {
    const { getByText } = render(
      <ProgressTracker
        currentAmount={50}
        totalAmount={100}
        label="Stage: Uploading"
      />
    );
    expect(getByText("50MB of 100MB")).toBeVisible();
  });

  it("should not render current and total amount when indeterminate is set", () => {
    const { queryByText } = render(
      <ProgressTracker
        currentAmount={50}
        totalAmount={100}
        isIndeterminate={true}
        label="Stage: Uploading"
      />
    );
    expect(queryByText("50MB of 100MB")).toBeNull();
  });

  it("should render completed version when complete is set to true", () => {
    const { getByText } = render(
      <ProgressTracker
        currentAmount={50}
        isComplete={true}
        totalAmount={100}
        label="Stage: Uploading"
      />
    );
    expect(getByText("Complete")).toBeVisible();
  });

  it("should render indeterminate version when indeterminate is set to true", () => {
    const { getByText } = render(
      <ProgressTracker isIndeterminate={true} label="Stage: Uploading" />
    );
    expect(getByText("In progress...")).toBeVisible();
  });

  it("should not render decimal percentage values", () => {
    const { getByText } = render(
      <ProgressTracker
        currentAmount={150}
        totalAmount={256}
        label="Stage: Uploading"
      />
    );
    expect(getByText("58% complete")).toBeVisible();
  });

  it("should convert current value to total value if current value exceeds total value", () => {
    const { getByText } = render(
      <ProgressTracker
        currentAmount={150}
        totalAmount={100}
        label="Stage: Uploading"
      />
    );
    expect(getByText("100MB of 100MB")).toBeVisible();
    expect(getByText("100% complete")).toBeVisible();
  });

  it("should convert negative values to zero", () => {
    const { getByText } = render(
      <ProgressTracker
        currentAmount={-50}
        totalAmount={100}
        label="Stage: Uploading"
      />
    );
    expect(getByText("0MB of 100MB")).toBeVisible();
    expect(getByText("0% complete")).toBeVisible();
  });
});
