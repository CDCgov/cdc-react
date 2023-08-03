import { render } from "@testing-library/react";

import { Icon } from "./Icon";

describe("Icon component for CDC Component Library", () => {
  it("should render an icon", () => {
    const classWrapName = "settings-icon-wrap";

    const { container } = render(
      <Icon name="settings" className={classWrapName} />
    );

    const svg = container.getElementsByClassName(classWrapName)[0];

    expect(svg).toBeInTheDocument();
  });
});
