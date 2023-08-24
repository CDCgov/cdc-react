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
          { icon: "dashboard", text: "Dashboard" },
          { icon: "process", text: "Process Status" },
          { icon: "quality", text: "Quality" },
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
  });
});
