import { useState, useEffect, useCallback } from "react";

const STORAGE_KEY = "dotnet_senior_checklist_v1";

export function useChecklist() {
  const [checked, setChecked] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(checked));
    } catch {
      // storage full or unavailable
    }
  }, [checked]);

  const toggle = useCallback((id) => {
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }));
  }, []);

  const toggleCategory = useCallback((items, allChecked) => {
    setChecked((prev) => {
      const updated = { ...prev };
      items.forEach((item) => {
        updated[item.id] = !allChecked;
      });
      return updated;
    });
  }, []);

  const resetAll = useCallback(() => {
    setChecked({});
    localStorage.removeItem(STORAGE_KEY);
  }, []);

  const countChecked = useCallback(
    (items) => items.filter((item) => checked[item.id]).length,
    [checked]
  );

  return { checked, toggle, toggleCategory, resetAll, countChecked };
}
