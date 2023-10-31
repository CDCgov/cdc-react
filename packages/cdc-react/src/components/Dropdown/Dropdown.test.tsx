import { render, screen } from "@testing-library/react";

import { vi } from "vitest";

import { Dropdown } from "..";
import { Icons } from "@us-gov-cdc/cdc-react-icons";

describe("Dropdown component", () => {
  it("should render the Dropdown UI component and click actions work", () => {
    const onSelect = vi.fn();

    render(
      <Dropdown
        srText="Dropdown Screen Reader text"
        label="Dropdown Label"
        items={["Item One", "Item Two", "Item Three"]}
        labelIcon={<Icons.Calendar />}
        onSelect={onSelect}
      />
    );

    expect(screen.getByText("Dropdown Label")).toBeInTheDocument();

    const dropdown = screen.getByText("Dropdown Label");

    dropdown.click();

    expect(screen.getByText("Item One")).toBeInTheDocument();

    const dropdownItemOne = screen.getByText("Item One");

    dropdownItemOne.click();

    expect(onSelect).toHaveBeenCalled();
  });
});
