import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach } from "vitest";
import { MemoryRouter } from "react-router-dom";
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
            { icon: "dashboard", text: "Dashboard", route: "dashboard" },
            { icon: "process", text: "Process Status", route: "/" },
            { icon: "quality", text: "Quality", route: "/" },
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
  });
});
