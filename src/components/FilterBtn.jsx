import React from 'react'
   const FilterBtn = ({ label, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1 rounded transition ${
        active ? "bg-black text-white" : "bg-gray-200 text-gray-700"
      }`}
    >
      {label}
    </button>
  );
};

export default FilterBtn;
