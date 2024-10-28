// src/app/component/OptionsSelector.tsx
"use client";

import React, { useState } from "react";
import { useProductContext } from "@/context/ProductContext";

const OptionsSelector: React.FC = () => {
  const { product, setProductDetails } = useProductContext();
  const [selectedColor, setSelectedColor] = useState("red");
  const [selectedSize, setSelectedSize] = useState("S");

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
    setProductDetails(color, selectedSize);
  };

  const handleSizeChange = (size: string) => {
    setSelectedSize(size);
    setProductDetails(selectedColor, size);
  };

  return (
    <div className="space-y-4">
      {/* Color Selector */}
      <div>
        <label className="block font-semibold text-gray-700 flex space-y-6 ">Color:</label>
        <div className="flex space-x-3 mt-2">
          {Object.keys(product.colorOptions).map((color) => (
            <button
              key={color}
              onClick={() => handleColorChange(color)}
              className={`w-8 h-8 rounded-full ${
                selectedColor === color ? "ring-2 ring-offset-2 ring-blue-500" : ""
              }`}
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>

      {/* Size Selector */}
      <div>
        <label className="block font-semibold text-gray-700">Size:</label>
        <select
          value={selectedSize}
          onChange={(e) => handleSizeChange(e.target.value)}
          className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        >
          {Object.keys(product.sizeOptions).map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default OptionsSelector;
