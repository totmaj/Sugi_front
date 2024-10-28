// src/app/component/ProductDetail.tsx
"use client";

import React from "react";
import { useProductContext } from "@/context/ProductContext";
import OptionsSelector from "./OptionsSelector";
import Reviews from "./Reviews";
import ProductImages from "./ProductImages";

const ProductDetail: React.FC = () => {
  const { product } = useProductContext();
  if (!product) {
    return <div>Loading...</div>; // Handle loading state
  }
  return (
    <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg max-w-6xl my-10">
      {/* Product Title  */}
      <div className="text-center border-b pb-6 mb-6">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-2">{product.name}</h1>
        
      </div>

      {/* Product Images and Options */}
      <div className="md:flex md:space-x-6">
        {/* Left: Product Images */}
        <div className="md:w-1/2 mb-6 md:mb-0">
          <ProductImages images={product.images} />
        </div>

        {/* Right: Product Details and Options */}
        <div className="md:w-1/2 space-y-6">
          {/* Product  Description */}
        <p className="text-gray-600 text-lg">{product.description}</p>
          <p className="text-3xl font-semibold text-green-600">
            Price: ${product.price.toFixed(2)}
          </p>

          {/* Options for Color and Size */}
          <OptionsSelector />
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mt-10">
        <Reviews  />
      </div>
    </div>
  );
};

export default ProductDetail;
