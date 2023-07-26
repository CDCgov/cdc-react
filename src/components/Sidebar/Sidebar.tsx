import "./Sidebar.scss";

import { useState, useEffect } from "react";

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
  const [isMobile, setApplicationWindowType] = useState(false);

  const checkWindowSize = (width: number) => {
    if (width <= 600) {
      setApplicationWindowType(true);
    } else {
      setApplicationWindowType(false);
    }
  };

  const handleWindowResize = () => {
    checkWindowSize(window.innerWidth);
  };

  useEffect(() => {
    if (window.innerWidth <= 600) {
      setApplicationWindowType(true);
    } else {
      setApplicationWindowType(false);
    }
    window.addEventListener("resize", handleWindowResize);
  }, [])

  const toggleVisibility = () => {
    setCollapsed(!isCollapsed);
  };

  return (
    <div className="cdc-react">
      <div className="sidebar-wrap">
        <div className={`
          sidebar
          ${isMobile ? "sidebar-mobile" : "sidebar-full"}
          ${isCollapsed ? "sidebar-collapsed" : ""}
        `}>
          <div className="menu-header section">
            <button
              type="button"
              className="usa-button usa-button--outline usa-button--inverse"
              onClick={toggleVisibility}
              aria-label="toggle"
            >
              {!isMobile && (!isCollapsed ? (
                <Icon className="chevron-double-left" name="chevron-double-left" />
              ) : (
                <Icon className="chevron-double-right" name="chevron-double-right" />
              ))}

              {isMobile && (!isCollapsed ? (
                <Icon className="menu" name="menu" />
              ) : (
                <Icon className="chevron-double-left" name="chevron-double-left" />
              ))}
            </button>
          </div>
          {sections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="menu-item section">
              <SidebarSection
                heading={section.heading}
                items={section.items}
                hideLabels={isCollapsed && !isMobile}
              />
            </div>
          ))}

          <div className="menu-footer section">
            <SidebarSection
              items={[{ text: "Support", icon: "support" }]}
              hideLabels={isCollapsed && !isMobile}
            />
            <SidebarSection
              items={[{ text: "Logout", icon: "logout" }]}
              hideLabels={isCollapsed && !isMobile}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
