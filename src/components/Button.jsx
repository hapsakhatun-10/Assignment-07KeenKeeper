import React from "react";
import { FaBell, FaFolder, FaTrash } from "react-icons/fa";

const Button = () => {
  return (
    <div className="mt-8 space-y-3">
      <button className="w-full flex items-center justify-center gap-2 py-3 bg-white border border-gray-200 rounded-2xl hover:bg-gray-50 transition">
        <FaBell />
        Snooze 2 Weeks
      </button>

      <button className="w-full flex items-center justify-center gap-2 py-3 bg-white border border-gray-200 rounded-2xl hover:bg-gray-50 transition">
        <FaFolder />
        Archive
      </button>

      <button className="w-full flex items-center justify-center gap-2 py-3 text-red-600 hover:bg-red-50 rounded-2xl transition">
        <FaTrash />
        Delete
      </button>
    </div>
  );
};

export default Button;
