import "./Dropdown.scss";

import { Icons } from "@us-gov-cdc/cdc-react-icons";
import { useState } from "react";

export interface DropdownProps {
  label: string;
  labelIcon?: React.ReactNode;
  items: string[];
  srText: string;
  id: string;
}

/**
 * Dropdown UI component
 */
export const Dropdown = ({
  labelIcon,
  label,
  items = [],
  srText,
  id,
}: DropdownProps) => {
  const [dropdownOpen, setDropdownVisibility] = useState(false);

  return (
    <div className="cdc-react" id={id}>
      <div className="dropdown">
        <div
          onClick={() => setDropdownVisibility(!dropdownOpen)}
          aria-label={srText}
          className="dropdown-label-wrap">
          <span className="dropdown-label-icon">{labelIcon}</span>
          <span className="dropdown-label">{label}</span>
          <span className="dropdown-arrow">
            {dropdownOpen ? <Icons.ChevronUp /> : <Icons.ChevronDown />}
          </span>
        </div>
        <div className={`dropdown-items ${dropdownOpen && "show"}`}>
          {/* <div className="arrowUp"></div> */}
          {items.map((item: string, index: number) => {
            return (
              <div
                className="dropdown-item"
                key={`cdc-react-dropdown-option-${index}`}>
                {item}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
