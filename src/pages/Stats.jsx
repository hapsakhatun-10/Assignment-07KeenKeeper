import { PieChart, Pie, ResponsiveContainer, Cell, Legend } from "recharts";
import { useContext } from "react";
import { TimelineContext } from "../components/TimelineContext";
import Noactivity from "../components/Noactivity";

const COLORS = ["#22c55e", "#f59e0b", "#3b82f6", "#ef4444", "#a855f7"];

const Stats = () => {
  const { timeline } = useContext(TimelineContext);

  const typeCount = {};

  timeline.forEach((item) => {
    const key = item.type || "unknown";
    typeCount[key] = (typeCount[key] || 0) + 1;
  });

  const chartData = Object.keys(typeCount).map((key) => ({
    name: key,
    value: typeCount[key],
  }));

  if (chartData.length === 0) {
    return <Noactivity />;
  }

  return (
    <div className="w-full mb-8 min-w-0 h-80 sm:h-95 md:h-112 flex items-center justify-center">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={chartData}
            dataKey="value"
            nameKey="name"
            innerRadius={80}
            outerRadius={130}
            paddingAngle={4}
            label
          >
            {chartData.map((entry) => (
              <Cell
                key={entry.name}
                fill={COLORS[chartData.indexOf(entry) % COLORS.length]}
              />
            ))}
          </Pie>

          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Stats;
