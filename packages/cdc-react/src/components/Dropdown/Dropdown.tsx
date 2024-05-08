import "./Dropdown.scss";

import { Icons } from "@us-gov-cdc/cdc-react-icons";
import { useEffect, useState } from "react";

export interface DropdownProps {
  label: string;
  items: string[];
  srText: string;
  onSelect: (item: string) => void;
  labelIcon?: React.ReactNode;
  onKeyDownDropdownLabel?:
    | React.KeyboardEventHandler<HTMLDivElement>
    | undefined;
  onKeyDownDropdownItems?:
    | React.KeyboardEventHandler<HTMLDivElement>
    | undefined;
  id?: string;
  className?: string;
  defaultValue?: string;
  helperText?: string;
}

/**
 * Dropdown UI component
 */
export const Dropdown = ({
  labelIcon,
  label,
  items = [],
  srText,
  onSelect,
  onKeyDownDropdownLabel,
  onKeyDownDropdownItems,
  id,
  className,
  defaultValue = "",
  helperText,
}: DropdownProps) => {
  const [dropdownOpen, setDropdownVisibility] = useState(false);
  const [dropdownCurrentItem, setDropdownCurrentItem] = useState("");

  useEffect(() => {
    setDropdownCurrentItem(defaultValue);
  }, [defaultValue]);

  return (
    <div className={`cdc-react ${className || ""}`} id={id}>
      <div className="dropdown-label">{label}</div>
      {!!helperText && <div className="dropdown-helper-text">{helperText}</div>}
      <div className="dropdown">
        <div
          role="presentation"
          onKeyDown={onKeyDownDropdownLabel}
          onClick={() => setDropdownVisibility(!dropdownOpen)}
          aria-label={srText}
          className="dropdown-value-wrap">
          <span className="dropdown-value-icon">{labelIcon}</span>
          <span className="dropdown-value">
            {dropdownCurrentItem ? dropdownCurrentItem : "-Select-"}
          </span>
          <span className="dropdown-arrow">
            {dropdownOpen ? <Icons.ChevronUp /> : <Icons.ChevronDown />}
          </span>
        </div>
        <div className={`dropdown-items ${dropdownOpen && "show"}`}>
          {items.map((item: string, index: number) => (
            <div
              role="presentation"
              onKeyDown={onKeyDownDropdownItems}
              onClick={() => {
                setDropdownCurrentItem(item);
                setDropdownVisibility(!dropdownOpen);
                onSelect(item);
              }}
              className="dropdown-item"
              key={`cdc-react-dropdown-option-${index}`}>
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
