import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach } from "vitest";
import { Sidebar } from "./Sidebar";
import { ScreenSize, resizeView } from "../../tests/mediaQueryUtils";

afterEach(() => {
  cleanup();
});

describe("Sidebar component", () => {
  it("should render the toggle button", () => {
    render(<Sidebar sections={[]} />);

    expect(screen.getByLabelText("toggle")).toBeInTheDocument();
  });

  it("should show logout button by default", () => {
    render(
      <Sidebar
        sections={[
          {
            heading: "",
            items: [
              {
                componentType: "a",
                icon: "logout",
                text: "Logout",
                href: "/logout",
              },
            ],
          },
        ]}
      />
    );

    expect(screen.getByText("Logout")).toBeInTheDocument();
  });

  it("should hide logout button when sidebar collapsed", () => {
    render(<Sidebar sections={[]} />);

    const toggleBtn = screen.getByLabelText("toggle");
    fireEvent.click(toggleBtn);

    expect(screen.queryByText("Logout")).not.toBeInTheDocument();
  });
});

describe("Responsiveness", () => {
  describe("Media Query Breakpoint Mocks", () => {
    const mockScreenSize = (size: ScreenSize) => {
      resizeView(size);
      render(
        <Sidebar
          sections={[
            {
              heading: "",
              items: [
                {
                  componentType: "a",
                  icon: "logout",
                  text: "Logout",
                  href: "/logout",
                },
              ],
            },
          ]}
        />
      );
      expect(screen.getByText("logout")).toBeInTheDocument();
    };

    it("mocks mobile breakpoint width", () => {
      mockScreenSize("mobile-lg");
      expect(screen.queryByText("Logout")).not.toBeInTheDocument();
    });

    it("mocks mobile breakpoint tablet", () => {
      mockScreenSize("tablet");
      expect(screen.queryByText("Logout")).toBeInTheDocument();
    });

    it("mocks mobile breakpoint desktop", () => {
      mockScreenSize("desktop");
      expect(screen.queryByText("Logout")).toBeInTheDocument();
    });
  });
});
