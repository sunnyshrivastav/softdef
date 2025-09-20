import React from "react";

const FilterRadio = ({ options }) => {
  return (
    <div className="flex space-x-3">
      {options.map((opt, idx) => (
        <label
          key={idx}
          className="cursor-pointer flex flex-col items-center"
        >
          <input
            type="radio"
            name="color"
            value={opt.value}
            className="hidden peer"
          />
          <span
            className={`w-6 h-6 rounded-full border-2 border-gray-300 ${opt.color} peer-checked:ring-2 peer-checked:ring-blue-500`}
          ></span>
        </label>
      ))}
    </div>
  );
};

export default FilterRadio;
