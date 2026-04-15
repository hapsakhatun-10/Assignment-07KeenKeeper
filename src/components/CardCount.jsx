import React from "react";

const CardCount = ({ count }) => {
  return (
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center mt-6 shadow-md p-4 rounded-lg">      
      <div className="border border-gray-200 p-4 rounded-lg">
        <h2 className="font-semibold text-xl">{count.total || 0}</h2>
        <p>Total Friends</p>
      </div>

      <div className="border border-gray-200 p-4 rounded-lg">
        <h2 className="font-semibold text-xl">{count["overdue"] || 0}</h2>
        <p>Overdue</p>
      </div>

      <div className="border border-gray-200 p-4 rounded-lg">
        <h2 className="font-semibold text-xl">{count["on-track"] || 0}</h2>
        <p>On Track</p>
      </div>

      <div className="border border-gray-200 p-4 rounded-lg">
        <h2 className="font-semibold text-xl">{count["almost due"] || 0}</h2>
        <p>Almost Due</p>
      </div>

    </div>
  );
};

export default CardCount;