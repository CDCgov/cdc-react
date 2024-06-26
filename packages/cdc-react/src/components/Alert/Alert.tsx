import "./Alert.scss";

export interface AlertProps {
  type: "info" | "warning" | "success" | "error" | "emergency";
  slim?: boolean;
  noIcon?: boolean;
  fullWidth?: boolean;
  leftAlign?: boolean;
  heading?: string | React.ReactNode;
  children: string | React.ReactNode;
}

/**
 * Alert UI component
 */
export const Alert = ({
  type,
  slim,
  noIcon,
  fullWidth,
  leftAlign,
  heading,
  children,
  className,
}: AlertProps & JSX.IntrinsicElements["div"]) => {
  const classList = ["usa-alert", `usa-alert--${type}`];
  if (slim) classList.push("usa-alert--slim");
  if (noIcon) classList.push("usa-alert--no-icon");
  if (fullWidth) classList.push("fluid");
  if (leftAlign) classList.push("left-align");
  if (className) classList.push(className);
  const classes = classList.join(" ");

  return (
    <div className="cdc-react">
      <div className={classes}>
        <div className="usa-alert__body">
          {heading && <h4 className="usa-alert__heading">{heading}</h4>}
          <p className="usa-alert__text">{children}</p>
        </div>
      </div>
    </div>
  );
};
