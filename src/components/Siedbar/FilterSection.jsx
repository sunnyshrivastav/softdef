import React from "react";

const FilterSection = ({ title, children }) => {
  return (
    
        <div className="mb-6 py-4 bg-gray-50 ">
      <h3 className="font-semibold  text-gray-700 mb-4">{title}</h3>
      {children}
    </div>
    
  );
};

export default FilterSection;
