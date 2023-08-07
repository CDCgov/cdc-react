import { render } from "@testing-library/react";

import { ProfileHeaderLogo } from "./ProfileHeaderLogo";

describe("ProfileHeaderLogo component", () => {
  it("should render a profile header logo component as an image element", () => {
    const classNames = ["logo-test-class"];

    const { container } = render(
      <ProfileHeaderLogo image="./test.png" classNames={classNames} />
    );

    const logoImage = container.getElementsByClassName(classNames[0])[0];

    expect(logoImage).toBeInTheDocument();
  });

  it("should render a profile header logo component as an svg element", () => {
    const svg = (
      <svg
        className="logo-test-class"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none">
        <path
          d="M12.5 13.6C15.1924 13.6 17.375 11.451 17.375 8.8C17.375 6.14903 15.1924 4 12.5 4C9.80761 4 7.625 6.14903 7.625 8.8C7.625 11.451 9.80761 13.6 12.5 13.6ZM12.5 13.6C16.0899 13.6 19 16.4654 19 20M12.5 13.6C8.91015 13.6 6 16.4654 6 20"
          stroke="#333333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );

    const { container } = render(
      <ProfileHeaderLogo image={svg} classNames={["logo-test-class"]} />
    );

    const logoImage = container.getElementsByClassName(
      ["logo-test-class"][0]
    )[0];

    expect(logoImage).toBeInTheDocument();
  });
});
