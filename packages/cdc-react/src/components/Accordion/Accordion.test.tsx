import { fireEvent, render } from "@testing-library/react";
import { Accordion, AccordionItemProps } from "./Accordion";

describe("Accordion Component", () => {
  const exampleItems: AccordionItemProps[] = [
    {
      id: "1",
      expanded: false,
      title: "First Item",
      content: "This is the first item content.",
    },
    {
      id: "2",
      expanded: true,
      title: "Second Item",
      content: "This is the second item content.",
    },
    {
      id: "3",
      expanded: false,
      title: "Third Item",
      content: "This is the third item content.",
    },
  ];

  it("should render title text of both items", () => {
    const { getByText } = render(<Accordion items={exampleItems} />);

    expect(getByText("First Item")).toBeVisible();
    expect(getByText("Second Item")).toBeVisible();
  });

  it("should show content if expanded is set to true", () => {
    const { getByText } = render(<Accordion items={exampleItems} />);

    expect(getByText("This is the first item content.")).not.toBeVisible();
    expect(getByText("This is the second item content.")).toBeVisible();
  });

  it("should show content if item is clicked on", () => {
    const { getByText } = render(<Accordion items={exampleItems} />);

    const firstItemTitle = getByText("First Item");
    const firstItemContent = getByText("This is the first item content.");

    expect(firstItemContent).not.toBeVisible();

    fireEvent.click(firstItemTitle);

    expect(firstItemContent).toBeVisible();

    fireEvent.click(firstItemTitle);

    expect(firstItemContent).not.toBeVisible();
  });

  it("should allow multiple items to be expanded when multiSelect is enabled", () => {
    const { getByText } = render(
      <Accordion items={exampleItems} multiselectable={true} />
    );

    const firstItemTitle = getByText("First Item");
    const firstItemContent = getByText("This is the first item content.");
    const thirdItemTitle = getByText("Third Item");
    const thirdItemContent = getByText("This is the third item content.");

    fireEvent.click(firstItemTitle);
    fireEvent.click(thirdItemTitle);

    expect(firstItemContent).toBeVisible();
    expect(thirdItemContent).toBeVisible();

    fireEvent.click(thirdItemTitle);

    expect(firstItemContent).toBeVisible();
    expect(thirdItemContent).not.toBeVisible();
  });
});
