import React from "react";

const FilterCheckbox = ({ options }) => {
  return (
    <div className="flex flex-col space-y-2">
      {options.map((opt, idx) => (
        <label key={idx} className="flex items-center space-x-2 cursor-pointer">
          <input type="checkbox" className="accent-blue-500" />
          <span>{opt}</span>
        </label>
      ))}
    </div>
  );
};

export default FilterCheckbox;
