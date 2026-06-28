import CheckItem from "./CheckItem";
import ProgressBar from "./ProgressBar";

export default function CategoryCard({ category, checked, onToggle, onToggleCategory, countChecked }) {
  const done = countChecked(category.items);
  const total = category.items.length;
  const allChecked = done === total;

  return (
    <div className={`cat-card ${allChecked ? "cat-card--complete" : ""}`}>
      <div className="cat-header">
        <div className="cat-title-row">
          <span className="cat-badge" style={{ background: category.color }}>
            {category.label}
          </span>
          <button
            className="cat-toggle-btn"
            onClick={() => onToggleCategory(category.items, allChecked)}
            title={allChecked ? "Uncheck all" : "Check all"}
          >
            {allChecked ? "Uncheck all" : "Check all"}
          </button>
        </div>
        <ProgressBar value={done} max={total} />
      </div>
      <div className="cat-items">
        {category.items.map((item) => (
          <CheckItem
            key={item.id}
            item={item}
            checked={checked[item.id]}
            onToggle={onToggle}
          />
        ))}
      </div>
    </div>
  );
}
