import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach } from "vitest";
import { Sidebar } from "./Sidebar";
import { Icons } from "@us-gov-cdc/cdc-react-icons";

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
                icon: <Icons.Logout />,
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
