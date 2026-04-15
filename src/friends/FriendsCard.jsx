import React from "react";

const FriendsCard = ({ data }) => {
  return (
    <div className="w-full bg-white rounded-2xl shadow-lg p-5 flex flex-col items-center text-center gap-3">
      
      <img
        src={data.picture}
        alt={data.name}
        className="w-20 h-20 rounded-full object-cover border"
      />

      <h2 className="text-lg font-bold text-gray-800">
        {data.name}
      </h2>
<p className="text-gray-400">64d ago</p>


      <span className="text-s bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
        {data.connection}
      </span>

      
      <span
        className={`text-s px-4 py-1 rounded-full font-medium ${
          data.status === "overdue"
            ? "bg-red-100 text-red-600"
            : data.status === "on-track"
            ? "bg-green-100 text-green-600"
            : "bg-yellow-100 text-yellow-600"
        }`}
      >
        {data.status}
      </span>

    </div>
  );
};

export default FriendsCard;