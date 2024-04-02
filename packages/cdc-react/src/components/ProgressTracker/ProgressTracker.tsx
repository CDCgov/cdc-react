import "./ProgressTracker.scss";

export interface ProgressTrackerProps {
  isComplete?: boolean;
  currentAmount?: number;
  isIndeterminate?: boolean;
  label?: string;
  totalAmount?: number;
}

export const ProgressTracker = ({
  isComplete = false,
  currentAmount = 0,
  isIndeterminate = false,
  label = "",
  totalAmount = 0,
}: ProgressTrackerProps) => {
  const getBarClass = () => {
    const classList = ["progress-bar-fill"];
    if (isComplete) classList.push("complete");
    if (isIndeterminate) classList.push("indeterminate");

    return classList.join(" ");
  };

  const getBarPercentage = (): number => {
    if (isIndeterminate || isComplete) return 100;

    currentAmount = Math.max(0, Math.min(currentAmount, totalAmount));
    totalAmount = Math.max(0, totalAmount);

    const percentage =
      totalAmount > 0 ? (currentAmount / totalAmount) * 100 : 0;

    return Math.floor(percentage);
  };

  const getBarPercentageInfo = (): string => {
    if (isComplete) return "Complete";
    if (isIndeterminate) return "In progress...";
    return `${getBarPercentage()}% complete`;
  };

  return (
    <div className="progress-wrapper">
      <div className="progress-label">{label}</div>
      <div className="progress-info">
        <span>{getBarPercentageInfo()}</span>
        {!(isIndeterminate || isComplete) && (
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
