import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach } from "vitest";
import { Link, MemoryRouter } from "react-router-dom";
import { SidebarSection } from "./SidebarSection";

afterEach(() => {
  cleanup();
});

describe("Sidebar section component", () => {
  it("should work with keyboard allowing sequential tabbing", async () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <SidebarSection
          heading="test"
          items={[
            {
              componentType: "a",
              icon: "dashboard",
              text: "Dashboard",
              href: "/dashboard",
            },
            {
              componentType: "a",
              icon: "process",
              text: "Process Status",
              href: "/process-status",
            },
            {
              componentType: "a",
              icon: "quality",
              text: "Quality",
              href: "/quality",
            },
            {
              componentType: Link,
              icon: "quality",
              text: "Logout",
              to: "/logout",
            },
          ]}
        />
      </MemoryRouter>
    );

    const anchorElements = screen.getAllByRole("link");

    await userEvent.tab();
    expect(document.activeElement).toEqual(anchorElements[0]);

    await userEvent.tab();
    expect(document.activeElement).toEqual(anchorElements[1]);

    await userEvent.tab();
    expect(document.activeElement).toEqual(anchorElements[2]);

    await userEvent.tab();
    expect(document.activeElement).toEqual(anchorElements[3]);
  });
});
