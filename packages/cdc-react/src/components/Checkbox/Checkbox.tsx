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

export const Checkbox = ({
  id,
  label,
  description,
  isChecked,
  srOnly,
  onChange,
  onKeyDown,
  indeterminate,
  disabled,
  className,
}: CheckboxProps & JSX.IntrinsicElements["div"]) => {
  const Icon = isChecked ? (
    <Icons.Check className="icon check-icon" />
  ) : indeterminate ? (
    <Icons.Minus className="icon minus-icon" />
  ) : null;

  const classList = ["cdc-react", "checkbox-container"];
  if (isChecked) {
    classList.push("checked");
  } else {
    classList.push("unchecked");
  }
  if (disabled) classList.push("checkbox-disabled");
  if (className) classList.push(className);
  const classes = classList.join(" ");

  return (
    <label htmlFor={id} className={classes}>
      <input
        type="checkbox"
        className="checkbox"
        checked={isChecked}
        id={id}
        disabled={disabled}
        ref={(input) => {
          if (input) {
            input.indeterminate = indeterminate || false;
          }
        }}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
      {Icon}
      <div className={((srOnly && "sr-only ") || "") + "checkbox-content"}>
        <span className="label">{label}</span>
        {description && <div className="label-description">{description}</div>}
      </div>
    </label>
  );
};
