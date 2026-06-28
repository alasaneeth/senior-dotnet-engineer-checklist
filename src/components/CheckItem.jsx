export default function CheckItem({ item, checked, onToggle }) {
  return (
    <label className={`check-item ${checked ? "check-item--done" : ""}`}>
      <input
        type="checkbox"
        checked={!!checked}
        onChange={() => onToggle(item.id)}
        className="check-input"
      />
      <span className="check-box">
        {checked && (
          <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2 6L5 9L10 3"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </span>
      <span className="check-label">{item.label}</span>
    </label>
  );
}
