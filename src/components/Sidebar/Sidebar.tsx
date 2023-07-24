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

export const Sidebar = ({}: SidebarProps) => {
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

        <div className="menu_item">
          {!isCollapsed && <h2 className="heading">Insights</h2>}

          <ul>
            <li>
              <span className="icon">🔥</span>
              <span className="text">Dashboard</span>
            </li>
            <li>
              <span className="icon">🔥</span>
              <span className="text">Process Status</span>
            </li>
            <li>
              <span className="icon">🔥</span>
              <span className="text">Quality</span>
            </li>
          </ul>
        </div>

        <div className="menu_item">
          {!isCollapsed && <h2 className="heading">Admin Tasks</h2>}
        </div>
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
