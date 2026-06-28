import { useState, useMemo } from "react";
import { CHECKLIST_DATA, TOTAL_ITEMS } from "./data/checklistData";
import { useChecklist } from "./hooks/useChecklist";
import Header from "./components/Header";
import FilterBar from "./components/FilterBar";
import CategoryCard from "./components/CategoryCard";
import "./App.css";

export default function App() {
  const { checked, toggle, toggleCategory, resetAll, countChecked } = useChecklist();
  const [filter, setFilter] = useState("all");

  const totalDone = useMemo(
    () => CHECKLIST_DATA.reduce((acc, cat) => acc + countChecked(cat.items), 0),
    [checked, countChecked]
  );

  const filteredData = useMemo(() => {
    if (filter === "all") return CHECKLIST_DATA;
    return CHECKLIST_DATA.map((cat) => ({
      ...cat,
      items: cat.items.filter((item) =>
        filter === "done" ? checked[item.id] : !checked[item.id]
      ),
    })).filter((cat) => cat.items.length > 0);
  }, [filter, checked]);

  const handleReset = () => {
    if (window.confirm("All progress reset ஆகும். சரியா?")) {
      resetAll();
    }
  };

  return (
    <div className="app">
      <Header
        totalDone={totalDone}
        totalItems={TOTAL_ITEMS}
        onReset={handleReset}
      />
      <main className="app-main">
        <FilterBar filter={filter} onFilterChange={setFilter} />
        {filteredData.length === 0 ? (
          <div className="empty-state">
            {filter === "done"
              ? "இன்னும் எதுவும் complete ஆகவில்லை. Start checking! 💪"
              : "All items done! 🎉 You're Senior-ready!"}
          </div>
        ) : (
          <div className="grid">
            {filteredData.map((cat) => (
              <CategoryCard
                key={cat.id}
                category={cat}
                checked={checked}
                onToggle={toggle}
                onToggleCategory={toggleCategory}
                countChecked={countChecked}
              />
            ))}
          </div>
        )}
      </main>
      <footer className="app-footer">
        Based on @juliocasal's Senior .NET Developer Checklist · Progress saved locally
      </footer>
    </div>
  );
}
