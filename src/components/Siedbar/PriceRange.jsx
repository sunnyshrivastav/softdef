import React, { useState } from "react";

const PriceRange = ({ min, max }) => {
  const [value, setValue] = useState(max);

  return (
    <div>
      <p className="text-gray-600 mb-2">
        Range: ${min} - ${value}
      </p>
      <input
        type="range"
        min={min}
        max={max}
        step="0.5"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-full accent-blue-500"
      />
    </div>
  );
};

export default PriceRange;
