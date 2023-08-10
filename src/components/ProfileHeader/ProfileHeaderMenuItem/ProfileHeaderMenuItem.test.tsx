import { render } from "@testing-library/react";

import { ProfileHeaderMenuItem } from "./ProfileHeaderMenuItem";

describe("ProfileHeaderMenuItem component", () => {
  it("should render a profile header menu item with inner text", () => {
    const classNames = ["profile-header-menu-item"];

    const { container } = render(
      <ProfileHeaderMenuItem badgeCount={0} icon="chevron-double-left" />
    );

    const menuItem = container.getElementsByClassName(classNames[0])[0];

    expect(menuItem).toBeInTheDocument();
  });
});
