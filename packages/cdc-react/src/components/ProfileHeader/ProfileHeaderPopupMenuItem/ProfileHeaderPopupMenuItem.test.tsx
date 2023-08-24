import { render, screen } from "@testing-library/react";

import { ProfileHeaderPopupMenuItem } from "./ProfileHeaderPopupMenuItem";

describe("ProfileHeaderPopupMenuItem component", () => {
  it("should render a profile header popup menu component with inner text", () => {
    render(
      <ProfileHeaderPopupMenuItem
        tabIndex={1}
        focused={true}
        badgeCount={0}
        icon="chevron-double-left"
        iconPosition="left"
        text="Test"
        className="profile-header-popup-menu-item"
      />
    );

    expect(screen.getByText("Test")).toBeInTheDocument();
  });
});
