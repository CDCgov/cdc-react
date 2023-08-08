import { render, screen } from "@testing-library/react";

import { ProfileHeaderMenuItem } from "./ProfileHeaderMenuItem";

describe("ProfileHeaderMenuItem component", () => {
  it("should render a profile header menu item with inner text", () => {
    render(
      <ProfileHeaderMenuItem className="profile-header-menu-item hide-on-mobile">
        Test
      </ProfileHeaderMenuItem>
    );

    expect(screen.getByText("Test")).toBeInTheDocument();
  });
});
