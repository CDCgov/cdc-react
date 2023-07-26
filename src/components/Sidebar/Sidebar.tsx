import "./Sidebar.scss";

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
    <div className="cdc-react">
      <div className="sidebar-wrap">
        <div
          className={`
          sidebar
          ${isCollapsed ? "sidebar-collapsed" : ""}
        `}
        >
          <div className="menu-header section">
            <button
              type="button"
              className="usa-button usa-button--outline usa-button--inverse"
              onClick={toggleVisibility}
              aria-label="toggle"
            >
              <Icon className="menu" name="menu" />
              <Icon
                className="chevron-double-left-mobile"
                name="chevron-double-left"
              />

              {!isCollapsed ? (
                <Icon
                  className="chevron-double-left"
                  name="chevron-double-left"
                />
              ) : (
                <>
                  <Icon
                    className="chevron-double-right"
                    name="chevron-double-right"
                  />
                </>
              )}
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
              items={[
                { text: "Support", icon: "support" },
                { text: "Logout", icon: "logout" },
              ]}
              hideLabels={isCollapsed}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
