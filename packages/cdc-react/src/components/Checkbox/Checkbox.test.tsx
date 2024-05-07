import { render } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import { Checkbox } from "./Checkbox";

describe("Checkbox Component with Icons", () => {
  test("displays a check icon when checked", () => {
    const { getByTitle } = render(
      <Checkbox label="Checked Checkbox" isChecked={true} />
    );
    const checkIcon = getByTitle("check-icon");
    expect(checkIcon).toBeInTheDocument();
  });

  test("displays a minus icon when indeterminate", () => {
    const { getByTitle } = render(
      <Checkbox
        label="Indeterminate Checkbox"
        isChecked={false}
        indeterminate={true}
      />
    );
    const minusIcon = getByTitle("minus-icon");
    expect(minusIcon).toBeInTheDocument();
  });

  test("does not display any icon when unchecked and not indeterminate", () => {
    const { queryByTitle } = render(
      <Checkbox label="Unchecked Checkbox" isChecked={false} />
    );
    const icon = queryByTitle("check-icon") || queryByTitle("minus-icon");
    expect(icon).not.toBeInTheDocument();
  });
});
