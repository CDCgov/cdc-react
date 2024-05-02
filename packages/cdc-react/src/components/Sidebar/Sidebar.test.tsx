import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach } from "vitest";
import { Sidebar } from "./Sidebar";
import { resizeView } from "../../tests/mediaQueryUtils";

afterEach(() => {
  cleanup();
});

describe("Sidebar component", () => {
  it("should render the toggle button", () => {
    render(<Sidebar sections={[]} />);

    expect(screen.getByLabelText("Toggle Side Menu")).toBeInTheDocument();
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

    const toggleBtn = screen.getByLabelText("Toggle Side Menu");
    fireEvent.click(toggleBtn);

    expect(screen.queryByText("Logout")).not.toBeInTheDocument();
  });
});

describe("Responsiveness", () => {
  describe("Media Query Breakpoint Mocks", () => {
    const renderComponent = () => {
      return render(
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
    };

    it("mocks mobile breakpoint width", () => {
      resizeView("mobile-lg");
      renderComponent();
      expect(screen.queryByText("Logout")).not.toBeInTheDocument();
    });

    it("mocks mobile breakpoint tablet", () => {
      resizeView("tablet");
      renderComponent();
      expect(screen.queryByText("Logout")).toBeInTheDocument();
    });

    it("mocks mobile breakpoint desktop", () => {
      resizeView("desktop");
      renderComponent();
      expect(screen.queryByText("Logout")).toBeInTheDocument();
    });
  });
});
