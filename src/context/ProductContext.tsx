// src/context/ProductContext.tsx
"use client";

import { Product } from "@/models/product";
import { Review } from "@/models/Review";
import React, { createContext, useContext, useState } from "react";

interface ProductContextType {
  product: Product;
  setProductDetails: (color: string, size: string) => void;
  addReview: (review: Review) => void;
}

const defaultProduct: Product = {
  name: "Sample T-Shirt Product",
  description: "A high-quality product A high-quality product A high-quality product A high-quality product ",
  basePrice: 100,
  price: 100,
  images: ["1.jpg", "2.png"],
  colorOptions: { red: 0, blue: 5, green: 10 }, // Adjustments by color
  sizeOptions: { S: 0, M: 10, L: 20 }, // Adjustments by size
  reviews: [{ comment: "that's perfect", rating: 5, user: "elahe totmaj" }],
};

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [product, setProduct] = useState<Product>(defaultProduct);

  const setProductDetails = (color: string, size: string) => {
    const colorAdjustment = product.colorOptions[color] || 0;
    const sizeAdjustment = product.sizeOptions[size] || 0;
    const newPrice = product.basePrice + colorAdjustment + sizeAdjustment;

    setProduct((prevProduct) => ({
      ...prevProduct,
      price: newPrice,
    }));
  };

  // New function to add a review
  const addReview = (review: Review) => {
    // Optional: Check if the review is valid (e.g., rating is between 1 and 5)
    if (!review.user || !review.comment || review.rating < 1 || review.rating > 5) {
      console.error("Invalid review submission");
      return; // Exit if the review is invalid
    }
  
    setProduct((prevProduct) => ({
      ...prevProduct,
      reviews: [...prevProduct.reviews, review],
    }));
  };

  return (
    <ProductContext.Provider value={{ product, setProductDetails, addReview }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProductContext must be used within a ProductProvider");
  }
  return context;
};
