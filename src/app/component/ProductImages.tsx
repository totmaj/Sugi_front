// src/app/component/ProductImages.tsx
"use client";

import React, { useState } from "react";

interface ProductImagesProps {
  images: string[];
}

const ProductImages: React.FC<ProductImagesProps> = ({ images }) => {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className="flex flex-col items-center">
      <img src={mainImage} alt="Product" className="w-full h-auto mb-4" />
      <div className="flex space-x-2">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Thumbnail ${idx + 1}`}
            className="w-16 h-16 cursor-pointer"
            onClick={() => setMainImage(img)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
