import "./ProgressTracker.scss";

export interface ProgressTrackerProps {
  complete?: boolean;
  currentAmount?: number;
  indeterminate?: boolean;
  label?: string;
  totalAmount?: number;
}

export const ProgressTracker = ({
  complete = false,
  currentAmount = 0,
  indeterminate = false,
  label = "",
  totalAmount = 0,
}: ProgressTrackerProps) => {
  const getBarClass = () => {
    const classList = ["progress-bar-fill"];
    if (complete) classList.push("complete");
    if (indeterminate) classList.push("indeterminate");

    return classList.join(" ");
  };

  const getBarPercentage = (): number => {
    if (indeterminate || complete) return 100;
    return totalAmount > 0 ? (currentAmount / totalAmount) * 100 : 0;
  };

  const getBarPercentageInfo = (): string => {
    if (complete) return "Complete";
    if (indeterminate) return "In progress...";
    return `${getBarPercentage()}% complete`;
  };

  return (
    <div className="progress-wrapper">
      <div className="progress-label">{label}</div>
      <div className="progress-info">
        <span>{getBarPercentageInfo()}</span>
        {!(indeterminate || complete) && (
          <span>
            {currentAmount}MB of {totalAmount}MB
          </span>
        )}
      </div>
      <div className="progress-bar-background">
        <div
          className={getBarClass()}
          style={{ width: `${getBarPercentage()}%` }}></div>
      </div>
    </div>
  );
};
