import React from "react";
import FilterSection from "./FilterSection";
import FilterCheckbox from "./FilterCheckbox";
import FilterRadio from "./FilterRadio";
import PriceRange from "./PriceRange";

const Sidebar = () => {
  return (
    <div className="flex flex-col gap-6">
      {/* Category */}
      <div className="bg-white shadow-md rounded-lg p-4">
        <FilterSection title="Category">
          <FilterCheckbox
            options={[
              "Nike",
              "Airmax",
              "Adidas",
              "Puma",
              "Racer",
              "Vans",
              "All Stars",
            ]}
          />
        </FilterSection>
      </div>

      {/* Price */}
      <div className="bg-white shadow-md rounded-lg p-4">
        <FilterSection title="Prices">
          <PriceRange min={13.99} max={25.99} />
        </FilterSection>
      </div>

      {/* Color */}
      <div className="bg-white shadow-md rounded-lg p-4">
        <FilterSection title="Color">
          <FilterRadio
            options={[
              { label: "Blue", value: "blue", color: "bg-blue-500" },
              { label: "Black", value: "black", color: "bg-black" },
              { label: "Red", value: "red", color: "bg-red-500" },
              { label: "Yellow", value: "yellow", color: "bg-yellow-400" },
              { label: "Pink", value: "pink", color: "bg-pink-400" },
            ]}
          />
        </FilterSection>
      </div>

      {/* Brand */}
      <div className="bg-white shadow-md rounded-lg p-4">
        <FilterSection title="Brand">
          <FilterCheckbox
            options={[
              "Nike",
              "Adidas",
              "Siemens",
              "Puma",
              "Racer",
              "Vans",
            ]}
          />
        </FilterSection>
      </div>

      {/* More Button */}
      <button className="w-full bg-gray-100 p-3 rounded-lg font-medium text-gray-700 hover:bg-gray-200 transition">
        More
      </button>
    </div>
  );
};

export default Sidebar;
