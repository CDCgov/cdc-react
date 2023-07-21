import { cleanup, render, screen } from "@testing-library/react";
import { afterEach } from "vitest";

import { Icon } from "./Icon";

afterEach(() => {
  cleanup();
});

describe("Icon component for CDC Component Library", () => {
  it("should render an icon", () => {
    const { container } = render(<Icon name="settings" />);
  });
});
