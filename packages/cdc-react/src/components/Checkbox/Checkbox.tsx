// Checkbox.tsx
import { ChangeEvent } from "react";
import { Icons } from "@us-gov-cdc/cdc-react-icons";
import "./Checkbox.scss";

type CheckboxProps = {
  id?: string;
  label?: string;
  description?: string;
  isChecked?: boolean;
  srOnly?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  indeterminate?: boolean;
  disabled?: boolean;
};

export const Checkbox = (props: CheckboxProps) => {
  const Icon = props.isChecked ? (
    <Icons.Check className="icon check-icon" />
  ) : props.indeterminate ? (
    <Icons.Minus className="icon minus-icon" />
  ) : null;

  return (
    <label
      htmlFor={props.id}
      className={`cdc-react checkbox-container 
      ${props.isChecked ? "checked" : "unchecked"}
      ${props.disabled ? "checkbox-disabled" : ""}
      `}>
      <input
        type="checkbox"
        className="checkbox"
        checked={props.isChecked}
        id={props.id}
        disabled={props.disabled}
        ref={(input) => {
          if (input) {
            input.indeterminate = props.indeterminate || false;
          }
        }}
        onChange={props.onChange}
        onKeyDown={props.onKeyDown}
      />
      {Icon}
      <div
        className={((props.srOnly && "sr-only ") || "") + "checkbox-content"}>
        <span className="label">{props.label}</span>
        {props.description && (
          <div className="label-description">{props.description}</div>
        )}
      </div>
    </label>
  );
};
