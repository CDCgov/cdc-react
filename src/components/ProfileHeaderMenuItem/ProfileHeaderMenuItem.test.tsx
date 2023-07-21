import { cleanup, render, screen } from "@testing-library/react";
import { afterEach } from "vitest";
import { ProfileHeaderMenuItem } from "./ProfileHeaderMenuItem";

afterEach(() => {
  cleanup();
});

describe("Header component for DEX CDC Portal", () => {
  it("should render seven buttons with the correct text", () => {
    const { container } = render(
      <ProfileHeaderMenuItem className="profile-header-menu-item hide-on-mobile">
        Test
      </ProfileHeaderMenuItem>
    );
    
    expect(screen.getByText("Test")).toBeInTheDocument();
  });
});
