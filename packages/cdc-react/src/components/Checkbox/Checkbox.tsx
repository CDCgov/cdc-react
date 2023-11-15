import { ChangeEventHandler } from "react";

type CheckboxProps = {
  ariaLabel: string;
  checked: boolean;
  indeterminate?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};

export const Checkbox = (props: CheckboxProps) => {
  return (
    <>
      <input
        type="checkbox"
        aria-label={props.ariaLabel}
        checked={props.checked}
        onChange={props.onChange}
      />
    </>
  );
};
