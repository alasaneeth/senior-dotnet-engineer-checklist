export default function FilterBar({ filter, onFilterChange, categories }) {
  return (
    <div className="filter-bar">
      <button
        className={`filter-btn ${filter === "all" ? "filter-btn--active" : ""}`}
        onClick={() => onFilterChange("all")}
      >
        All
      </button>
      <button
        className={`filter-btn ${filter === "pending" ? "filter-btn--active" : ""}`}
        onClick={() => onFilterChange("pending")}
      >
        Pending
      </button>
      <button
        className={`filter-btn ${filter === "done" ? "filter-btn--active" : ""}`}
        onClick={() => onFilterChange("done")}
      >
        Done
      </button>
    </div>
  );
}
