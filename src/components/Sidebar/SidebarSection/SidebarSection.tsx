import { Icon, IconNames } from "../../Icon/Icon";
import "./SidebarSection.scss";

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
      {heading && <p className={`heading ${hideLabels ? 'hide-if-not-mobile' : ''}`}>{heading}</p>}
      <ul>
        {items.map((item, index) => (
          <li key={`${item.text}${index}`} role="button">
            <Icon className={`${item.icon}-icon icon`} name={item.icon} />
            {<span className={`text ${hideLabels ? 'hide-if-not-mobile' : ''}`}>{item.text}</span>}
          </li>
        ))}
      </ul>
    </>
  );
};
