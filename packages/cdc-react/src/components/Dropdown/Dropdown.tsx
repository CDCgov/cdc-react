import { IconNames, Icons } from "@us-gov-cdc/cdc-react-icons";
import "./Dropdown.scss";

export interface DropdownProps {
  label: string;
  labelIcon?: React.ReactNode;
  items: string[];
  srText: string;
}

/**
 * Dropdown UI component
 */
export const Dropdown = ({
  labelIcon,
  label,
  items = [],
  srText,
}: DropdownProps) => {
  return (
    <div className="cdc-react">
      <div className="dropdown">
        <div aria-label={srText} className="dropdown-label-wrap">
          <span className="dropdown-label-icon">{labelIcon}</span>
          <span className="dropdown-label">{label}</span>
          <span className="dropdown-arrow">
            <Icons.ChevronDown />
          </span>
        </div>
        <div className="dropdown-items">
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
