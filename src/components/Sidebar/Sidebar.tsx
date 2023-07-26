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
  sections: Section[];
}
export const Sidebar = ({ sections }: SidebarProps) => {
  const [isCollapsed, setCollapsed] = useState(false);

  const toggleVisibility = () => {
    setCollapsed(!isCollapsed);
  };

  return (
    <div className="sidebar">
      <div className={`sidebar-full ${isCollapsed ? "sidebar-collapsed" : ""}`}>
        <div className="menu-header section">
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
          <div key={sectionIndex} className="menu-item section">
            <SidebarSection
              heading={section.heading}
              items={section.items}
              hideLabels={isCollapsed}
            />
          </div>
        ))}

        <div className="menu-footer section">
          <SidebarSection
            items={[{ text: "Logout", icon: "logout" }]}
            hideLabels={isCollapsed}
          />
        </div>
      </div>
    </div>
  );
};
