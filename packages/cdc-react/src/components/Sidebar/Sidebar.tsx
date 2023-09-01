import "./Sidebar.scss";
import { ElementType, useLayoutEffect, useState } from "react";
import { SidebarSection } from "./SidebarSection/SidebarSection";
import { Icons } from "@us-gov-cdc/cdc-react-icons";

const MAX_MOBILE_WIDTH_PX = 600;

interface Item {
  componentType: string | ElementType;
  icon?: React.ReactNode;
  text?: string;
  children?: React.ReactNode;
  [key: string]: unknown;
}
interface Section {
  heading?: string;
  items: Item[];
}
interface SidebarProps {
  sections: Section[];
  footer?: Section[];
}
export const Sidebar = ({ sections, footer }: SidebarProps) => {
  const [isCollapsed, setCollapsed] = useState(true);

  // Run before initial render and dom calculation to determine defualt state of sidebar.
  useLayoutEffect(() => {
    if (window.innerWidth > MAX_MOBILE_WIDTH_PX) {
      setCollapsed(false);
    }
  }, []);

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
        `}>
          <div className="menu-header section">
            <button
              type="button"
              className="usa-button usa-button--outline usa-button--inverse"
              onClick={toggleVisibility}
              aria-label="toggle">
              <Icons.Menu className="menu" />
              <Icons.ChevronDoubleLeft className="chevron-double-left-mobile" />

              {!isCollapsed ? (
                <Icons.ChevronDoubleLeft className="chevron-double-left" />
              ) : (
                <>
                  <Icons.ChevronDoubleRight className="chevron-double-right" />
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

          {footer ? (
            <div className="menu-footer section">
              {footer.map((section, sectionIndex) => (
                <SidebarSection
                  key={sectionIndex}
                  heading={section.heading}
                  items={section.items}
                  hideLabels={isCollapsed}
                />
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};
