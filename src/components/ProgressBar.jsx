export default function ProgressBar({ value, max, label }) {
  const pct = max === 0 ? 0 : Math.round((value / max) * 100);

  return (
    <div className="progress-wrap">
      <div className="progress-header">
        <span className="progress-label">{label}</span>
        <span className="progress-count">
          {value}/{max}
          <span className="progress-pct"> · {pct}%</span>
        </span>
      </div>
      <div className="progress-track">
        <div
          className="progress-fill"
          style={{ width: `${pct}%` }}
          role="progressbar"
          aria-valuenow={pct}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
    </div>
  );
}
