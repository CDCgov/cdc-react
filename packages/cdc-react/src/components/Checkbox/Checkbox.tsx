// Checkbox.tsx
import { ChangeEvent, ReactNode } from "react";
import { Icons } from "@us-gov-cdc/cdc-react-icons";
import "./Checkbox.scss";

type CheckboxProps = {
  id?: string;
  label?: string;
  description?: string;
  checkedBox?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  indeterminate?: boolean;
  disabled?: boolean;
  children?: ReactNode;
};

export const Checkbox = (props: CheckboxProps) => {
  const Icon = props.checkedBox ? (
    <Icons.Check className="icon check-icon" />
  ) : props.indeterminate ? (
    <Icons.Minus className="icon minus-icon" />
  ) : null;

  return (
    <label
      htmlFor={props.id}
      className={`cdc-react checkbox-container 
      ${props.checkedBox ? "checked" : "unchecked"}
      ${props.disabled ? "checkbox-disabled" : ""}
      `}>
      <input
        type="checkbox"
        className="checkbox"
        checked={props.checkedBox}
        id={props.id}
        disabled={props.disabled}
        ref={(input) => {
          if (input) {
            input.indeterminate = props.indeterminate || false;
          }
        }}
        onChange={props.onChange}
      />
      {Icon}
      {props.children}
      <div className="checkbox-content">
        <span className="label">{props.label}</span>
        {props.description && (
          <div className="label-description">{props.description}</div>
        )}
      </div>
    </label>
  );
};
