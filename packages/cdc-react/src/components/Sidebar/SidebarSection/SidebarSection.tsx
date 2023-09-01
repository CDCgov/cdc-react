import "./SidebarSection.scss";
import { ElementType } from "react";

interface Item {
  componentType: string | ElementType;
  text?: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  [key: string]: unknown;
}

interface SidebarSectionProps {
  items: Item[];
  heading?: string;
  hideLabels?: boolean;
}

export const SidebarSection = ({
  items,
  heading,
  hideLabels = false,
}: SidebarSectionProps) => {
  // Element Factory
  const generateNavItem = (item: Item) => {
    const { componentType: Component, children, icon, text, ...rest } = item;
    return (
      <Component {...rest}>
        {icon}
        {text && !hideLabels && <span className="text">{text}</span>}
        {children}
      </Component>
    );
  };
  return (
    <>
      {heading && !hideLabels && <p className="heading">{heading}</p>}
      <ul>
        {items.map((item, index) => (
          <li key={`${item.text}${index}`}>{generateNavItem(item)}</li>
        ))}
      </ul>
    </>
  );
};
