import { createContext, useEffect, useState } from "react";

export const TimelineContext = createContext();


export const TimelineProvider = ({ children }) => {



  const [timeline, setTimeline] = useState(() => {
    return JSON.parse(localStorage.getItem("timeline")) || [];
  });

  const addToTimeline = (item) => {
  setTimeline((prev) => [
    {
      id: Date.now(),
      type: item.type,  
      title: item.title,
      time: item.time,
    },
    ...prev,
  ]);
};

  const removeFromTimeline = (id) => {
    setTimeline((prev) => prev.filter((item) => item.id !== id));
  };

  useEffect(() => {
    localStorage.setItem("timeline", JSON.stringify(timeline));
  }, [timeline]);

  return (
    <TimelineContext.Provider
      value={{
        timeline,
        addToTimeline,
        removeFromTimeline,
        
      }}
    >
      {children}
    </TimelineContext.Provider>
  );
};
