import { fireEvent, render, screen } from "@testing-library/react";
import { Pill } from "./Pill";

describe("Pill Component", () => {
  it("should render text", () => {
    render(<Pill label="hello" />);
    expect(screen.getByText("hello")).toBeInTheDocument();
  });

  it("should truncate long text", () => {
    const { container } = render(
      <Pill label="This is a long pull that should be truncated" />
    );

    expect(
      screen.getByTitle("This is a long pull that should be truncated")
    ).toBeInTheDocument();

    const truncatedText = container.getElementsByClassName("truncate")[0];
    expect(truncatedText).toBeInTheDocument();
  });

  it("should render aria label when aria label provided", () => {
    render(<Pill label="hello" ariaLabel="hello aria" />);
    expect(screen.getByLabelText("hello aria")).toBeInTheDocument();
  });

  it("should default aria label to label text", () => {
    render(<Pill label="hello" />);
    expect(screen.getByLabelText("hello")).toBeInTheDocument();
  });

  describe("Togglable", () => {
    it("should call onToggle callback", () => {
      let didGetCalled = false;
      const callback = () => (didGetCalled = true);

      render(<Pill label="click me" variation="toggle" onToggle={callback} />);

      const pill = screen.getByText("click me");
      fireEvent.click(pill);

      expect(didGetCalled).toBeTruthy;
    });
  });

  describe("Input", () => {
    it("should render close icon", () => {
      let testVal = false;
      render(
        <Pill
          label="option 1"
          variation="input"
          onDelete={() => (testVal = true)}
        />
      );
      const closeBtn = screen.getByLabelText("delete option 1");
      expect(closeBtn).toBeInTheDocument();

      fireEvent.click(closeBtn);

      expect(testVal).toBeTruthy();
    });
  });

  describe("Info", () => {
    it("should render image when string provided for avatar", () => {
      render(
        <Pill
          variation="info"
          label="some info"
          avatar="dummy image url"
          altText="dummy alt text"
        />
      );

      const img = screen.getByAltText("dummy alt text");

      expect(img).toBeInTheDocument;
    });

    it("should render custom image when custom image provided", () => {
      render(
        <Pill
          variation="info"
          label="some info"
          avatar={<img src="doesn't matter" alt="dummy alt text" />}
        />
      );

      const img = screen.getByAltText("dummy alt text");

      expect(img).toBeInTheDocument;
    });

    it("should render svg when icon provided", () => {
      const { container } = render(
        <Pill
          variation="info"
          label="some info"
          icon={<svg></svg>}
          altText="dummy alt text"
        />
      );

      const svg = container.getElementsByTagName("svg")[0];
      expect(svg).toBeInTheDocument;
    });
  });
});
