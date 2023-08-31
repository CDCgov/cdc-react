import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach } from "vitest";
import { SidebarSection } from "./SidebarSection";

afterEach(() => {
  cleanup();
});

describe("Sidebar section component", () => {
  it("should work with keyboard allowing sequential tabbing", async () => {
    render(
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
            componentType: "a",
            icon: "logout",
            text: "Logout",
            href: "/logout",
          },
        ]}
      />
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
