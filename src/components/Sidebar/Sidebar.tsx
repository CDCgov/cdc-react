import { useState } from "react";
import "./Sidebar.css";

interface Item {
  icon: string;
  text: string;
}
interface Section {
  heading: string;
  items: Item[];
}
interface SidebarProps {
  isVisible: boolean;
  sections: Section[];
}
export const Sidebar = ({ ...props }: SidebarProps) => {
  const { sections } = props;
  const [isCollapsed, setCollapsed] = useState(false);

  const toggleVisibility = () => {
    setCollapsed(!isCollapsed);
  };

  return (
    <div className="sidebar">
      <div className={`sidebar-full ${isCollapsed ? "sidebar-collapsed" : ""}`}>
        <div className="menu_header">
          <button
            type="button"
            className="usa-button usa-button--outline usa-button--inverse"
            onClick={toggleVisibility}
          >
            {!isCollapsed ? "<<" : ">>"}
          </button>
        </div>

        {sections.map((section, sectionIndex) => (
          <div key="{sectionIndex}" className="menu_item">
            {!isCollapsed && <h2 className="heading">{section.heading}</h2>}
            {section.items.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className={`item ${isCollapsed ? "visible" : "hidden"}`}
              >
                <ul>
                  <li>
                    <span className="icon">{item.icon}</span>
                    <span className="text">{item.text}</span>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        ))}

        <div className="menu_footer">
          <ul>
            <li>
              <span className="icon">❌</span>
              <span className="text">Logout</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
