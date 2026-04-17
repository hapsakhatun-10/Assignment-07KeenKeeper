import {
  PieChart,
  Pie,
  ResponsiveContainer,
  Cell,
  Legend,
  Tooltip,
} from "recharts";
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
    <div className="mb-4">
      <h2 className="text-2xl font-bold mb-4">Friendship Analytics</h2>

      <h3 className="text-lg font-semibold mb-4">By Interaction Type</h3>

<div className="w-full min-w-0 h-72 sm:h-80 md:h-96 flex items-center justify-center">        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="name"
              innerRadius={80}
              outerRadius={130}
              paddingAngle={4}
            >
              {chartData.map((entry, index) => (
                <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>

            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Stats;
