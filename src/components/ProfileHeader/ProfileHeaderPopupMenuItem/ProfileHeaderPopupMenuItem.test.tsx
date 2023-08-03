import { render, screen } from "@testing-library/react";

import { ProfileHeaderPopupMenuItem } from "./ProfileHeaderPopupMenuItem";

describe("ProfileHeaderPopupMenuItem component for CDC Component Library", () => {
  it("should render a profile header popup menu component with inner text", () => {
    render(
      <ProfileHeaderPopupMenuItem className="profile-header-popup-menu-item">
        Test
      </ProfileHeaderPopupMenuItem>
    );

    expect(screen.getByText("Test")).toBeInTheDocument();
  });
});
