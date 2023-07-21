import { cleanup, render, screen } from "@testing-library/react";
import { afterEach } from "vitest";

import { ProfileHeaderLogo } from "./ProfileHeaderLogo";

afterEach(() => {
  cleanup();
});

describe("ProfileHeaderLogo component for CDC Component Library", () => {
  it("should render a profile header logo component", () => {
    const { container } = render(<ProfileHeaderLogo image="./test.png" />);
  });
});