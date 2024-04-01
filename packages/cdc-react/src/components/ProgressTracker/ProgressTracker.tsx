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
  const progressPercent: number =
    totalAmount > 0 ? (currentAmount / totalAmount) * 100 : 0;

  return (
    <div className="progress-bar-background">
      <div
        className="progress-bar-fill"
        style={{ width: `${progressPercent}%` }}></div>
    </div>
  );
};
