import "./Sidebar.css";

import { useState } from "react";

import { Icon, IconNames } from "..";
import { SidebarSection } from "./SidebarSection/SidebarSection";

interface Item {
  icon: IconNames;
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
        <div className="menu-header">
          <button
            type="button"
            className="usa-button usa-button--outline usa-button--inverse"
            onClick={toggleVisibility}
            aria-label="toggle"
          >
            {!isCollapsed ? "<<" : ">>"}
          </button>
        </div>

        {sections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="menu-item">
            <SidebarSection
              heading={section.heading}
              items={section.items}
              hideLabels={isCollapsed}
            />
          </div>
        ))}

        <div className="menu-footer">
          <SidebarSection
            items={[{ text: "Logout", icon: "logout" }]}
            hideLabels={isCollapsed}
          />
        </div>
      </div>
    </div>
  );
};
