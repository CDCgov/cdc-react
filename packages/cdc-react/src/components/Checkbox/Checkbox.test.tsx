import { render } from "@testing-library/react";
import { describe, test } from "vitest";
import { Checkbox } from "./Checkbox";

describe("Checkbox Component", () => {
  test("should render checkbox component with default state", () => {
    const { getByLabelText } = render(
      <Checkbox label="checkbox" isChecked={false} />
    );
    const checkbox = getByLabelText("checkbox") as HTMLInputElement;

    expect(checkbox.checked).toBe(false);
    expect(checkbox.indeterminate).toBe(false);
  });

  test("should render checkbox component with checked state", () => {
    const { getByLabelText } = render(
      <Checkbox label="checkbox" isChecked={true} />
    );
    const checkbox = getByLabelText("checkbox") as HTMLInputElement;

    expect(checkbox.checked).toBe(true);
  });

  test("should render checkbox component with indeterminate state", () => {
    const { getByLabelText } = render(
      <Checkbox label="checkbox" isChecked={false} indeterminate={true} />
    );
    const checkbox = getByLabelText("checkbox") as HTMLInputElement;

    expect(checkbox.indeterminate).toBe(true);
    expect(checkbox.checked).toBe(false);
  });
});
