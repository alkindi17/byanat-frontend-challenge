/**
 * Progress bar component
 * @param progress The progress of the bar in percentage
 * @param barColor The color of the progress bar
 * @param bgColor The background color of the progress bar
 * @returns The progress bar component
 */
export default function ProgressBar({
  progress,
  barColor,
  bgColor,
}: {
  progress: number;
  barColor?: string;
  bgColor?: string;
}) {
  return (
    <div
      className="h-1.5 w-full rounded-full bg-primary-100"
      style={{ backgroundColor: bgColor }}
    >
      <div
        className="h-1.5 rounded-full bg-primary-400"
        style={{ width: `${progress}%`, backgroundColor: barColor }}
      ></div>
    </div>
  );
}
