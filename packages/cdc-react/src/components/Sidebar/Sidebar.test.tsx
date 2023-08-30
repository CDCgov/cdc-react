import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach } from "vitest";
import { MemoryRouter } from "react-router-dom";
import { Sidebar } from "./Sidebar";

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
      <MemoryRouter initialEntries={["/"]}>
        <Sidebar
          sections={[
            {
              heading: "",
              items: [{ icon: "logout", text: "Logout", route: "/" }],
            },
          ]}
        />
      </MemoryRouter>
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
