import { Icon, IconNames } from "../../Icon/Icon";
import { Link } from "react-router-dom";
import "./SidebarSection.scss";

interface Item {
  icon: IconNames;
  text: string;
  route: string;
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
      {heading && !hideLabels && <p className="heading">{heading}</p>}
      <ul>
        {items.map((item, index) => (
          <li key={`${item.text}${index}`}>
            <Link to={item.route}>
              <Icon className={`${item.icon}-icon icon`} name={item.icon} />
              {!hideLabels && <span className="text">{item.text}</span>}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
