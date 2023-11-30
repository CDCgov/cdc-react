// Checkbox.tsx
import { ChangeEvent, ReactNode, useState } from "react";
import "./Checkbox.scss";

type CheckboxProps = {
  id: string;
  label?: string;
  description?: string;
  checkedBox?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  indeterminate?: boolean;
  disabled?: boolean;
  children?: ReactNode;
};

export const Checkbox = (props: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState(props.checkedBox);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label
      htmlFor={props.id}
      className={`checkbox-container 
      ${isChecked ? "checked" : "unchecked"}
      ${props.disabled ? "checkbox-disabled" : ""}
      `}>
      <input
        type="checkbox"
        className="checkbox"
        checked={isChecked}
        onChange={toggleCheckbox}
        id={props.id}
        disabled={props.disabled}
      />
      <div className="checkbox-content">
        <span className="label">{props.label}</span>
        {props.description && (
          <div className="label-description">{props.description}</div>
        )}
      </div>
    </label>
  );
};
