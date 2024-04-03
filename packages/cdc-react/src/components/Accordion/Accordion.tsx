import { useState } from "react";

export interface AccordionItemProps {
  title: React.ReactNode | string;
  content: React.ReactNode | string;
  expanded: boolean;
  id: string;
  handleToggle?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

type AccordionProps = {
  bordered?: boolean;
  multiselectable?: boolean;
  items: AccordionItemProps[];
};

export const AccordionItem = ({
  title,
  id,
  content,
  expanded,
  handleToggle,
}: AccordionItemProps) => {
  return (
    <>
      <h4 className="usa-accordion__heading">
        <button
          type="button"
          className="usa-accordion__button"
          aria-expanded={expanded}
          aria-controls={id}
          data-testid={`accordionButton_${id}`}
          onClick={handleToggle}>
          {title}
        </button>
      </h4>
      <div
        id={id}
        data-testid={`accordionItem_${id}`}
        className="usa-accordion__content usa-prose"
        hidden={!expanded}>
        {content}
      </div>
    </>
  );
};

export const Accordion = ({
  bordered,
  items,
  className,
  multiselectable = false,
}: AccordionProps & JSX.IntrinsicElements["div"]) => {
  const [openItems, setOpenState] = useState(
    items.filter((i) => !!i.expanded).map((i) => i.id)
  );

  const getClasses = () => {
    const classList = ["usa-accordion"];
    if (bordered) classList.push("usa-accordion--bordered");
    if (className) classList.push(className);

    return classList.join(" ");
  };

  const toggleItem = (itemId: AccordionItemProps["id"]): void => {
    const newOpenItems = [...openItems];
    const itemIndex = openItems.indexOf(itemId);
    const isMultiselectable = multiselectable;

    if (itemIndex > -1) {
      newOpenItems.splice(itemIndex, 1);
    } else {
      if (isMultiselectable) {
        newOpenItems.push(itemId);
      } else {
        newOpenItems.splice(0, newOpenItems.length);
        newOpenItems.push(itemId);
      }
    }
    setOpenState(newOpenItems);
  };

  return (
    <div
      className={getClasses()}
      data-testid="accordion"
      data-allow-multiple={multiselectable || undefined}>
      {items.map((item, i) => (
        <AccordionItem
          key={`accordionItem_${i}`}
          {...item}
          expanded={openItems.indexOf(item.id) > -1}
          handleToggle={(): void => {
            toggleItem(item.id);
          }}
        />
      ))}
    </div>
  );
};

export default Accordion;
