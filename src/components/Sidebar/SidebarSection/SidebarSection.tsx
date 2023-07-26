import { Icon, IconNames } from "../../Icon/Icon";
import "./SidebarSection.css";

interface Item {
  icon: IconNames;
  text: string;
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
  return (
    <>
      {!hideLabels && <p className="heading">{heading}</p>}
      <ul>
        {items.map((item, index) => (
          <li key={`${item.text}${index}`}>
            <Icon className="icon" name={item.icon} />
            {!hideLabels && <span className="text">{item.text}</span>}
          </li>
        ))}
      </ul>
    </>
  );
};
