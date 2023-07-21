import { cleanup, render, screen } from "@testing-library/react";
import { afterEach } from "vitest";

import { ProfileHeaderPopupMenuItem } from "./ProfileHeaderPopupMenuItem";

afterEach(() => {
  cleanup();
});

describe("ProfileHeaderPopupMenuItem component for CDC Component Library", () => {
  it("should render a profile header popup menu component with inner text", () => {
    const { container } = render(
      <ProfileHeaderPopupMenuItem className="profile-header-popup-menu-item">
        Test
      </ProfileHeaderPopupMenuItem>
    );

    expect(screen.getByText("Test")).toBeInTheDocument();
  });
});
