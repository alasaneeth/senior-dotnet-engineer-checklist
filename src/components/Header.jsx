import ProgressBar from "./ProgressBar";

export default function Header({ totalDone, totalItems, onReset }) {
  const pct = totalItems === 0 ? 0 : Math.round((totalDone / totalItems) * 100);

  const getBadge = () => {
    if (pct === 100) return { label: "🏆 Senior Ready!", cls: "badge--gold" };
    if (pct >= 75) return { label: "🔥 Almost there!", cls: "badge--green" };
    if (pct >= 50) return { label: "⚡ Halfway!", cls: "badge--blue" };
    if (pct >= 25) return { label: "🚀 Good start", cls: "badge--purple" };
    return { label: "📋 Just started", cls: "badge--gray" };
  };

  const badge = getBadge();

  return (
    <header className="app-header">
      <div className="header-inner">
        <div className="header-top">
          <div>
            <h1 className="app-title">
              Senior .NET Developer
              <span className="title-accent"> Checklist</span>
            </h1>
            <p className="app-subtitle">Based on real LinkedIn job posts · 2026</p>
          </div>
          <button className="reset-btn" onClick={onReset} title="Reset all progress">
            <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" width="14" height="14">
              <path d="M2 8a6 6 0 1 0 1.5-3.9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M2 4v4h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Reset
          </button>
        </div>
        <div className="header-progress">
          <ProgressBar value={totalDone} max={totalItems} label="Overall Progress" />
          <span className={`status-badge ${badge.cls}`}>{badge.label}</span>
        </div>
      </div>
    </header>
  );
}
