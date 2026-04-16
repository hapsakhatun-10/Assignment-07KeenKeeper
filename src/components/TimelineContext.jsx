import { createContext, useEffect, useState } from "react";

export const TimelineContext = createContext();

export const TimelineProvider = ({ children }) => {
  const [timeline, setTimeline] = useState(() => {
    return JSON.parse(localStorage.getItem("timeline")) || [];
  });

  const addToTimeline = (item) => {
    setTimeline((prev) => [{ id: Date.now(), ...item }, ...prev]);
  };

  useEffect(() => {
    localStorage.setItem("timeline", JSON.stringify(timeline));
  }, [timeline]);

  return (
    <TimelineContext.Provider value={{ timeline, addToTimeline }}>
      {children}
    </TimelineContext.Provider>
  );
};
// localStorage.clear();