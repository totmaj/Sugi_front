// src/app/component/Reviews.tsx
"use client";

import React, { useState } from "react";
import { useProductContext } from "@/context/ProductContext";

const Reviews: React.FC = () => {
  const { product, addReview } = useProductContext();
  const [user, setUser] = useState("");
  const [rating, setRating] = useState<number>(5);
  const [comment, setComment] = useState("");

  const handleAddReview = () => {
    if (user && comment) {
      addReview({ user, rating, comment });
      setUser("");
      setRating(5);
      setComment("");
    }
  };
  const userChanged = (e: any) => {
    setUser(e.target.value);
  };
  return (
    <div className="bg-gray-100 p-6 rounded-lg mt-10">
      <h2 className="text-2xl font-semibold mb-4">Customer Reviews</h2>

      {/* Display existing reviews */}
      {product?.reviews.map((review, index) => (
        <div key={index} className="border-b py-4">
          <p className="font-semibold">{review?.user}</p>
          <p>Rating: {review.rating} / 5</p>
          <p>{review.comment}</p>
        </div>
      ))}

      {/* Form to add a new review */}
      <div className="mt-6 space-y-4">
        <div>
          <label className="block font-medium">Name</label>
          <input
            className="w-full p-2 border rounded-lg"
            type="text"
            required
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
        </div>

        <div>
          <label className="block font-medium">Rating</label>
          <select
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
            className="w-full p-2 border rounded-lg"
          >
            {[5, 4, 3, 2, 1].map((rate) => (
              <option key={rate} value={rate}>
                {rate}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block font-medium">Review</label>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full p-2 border rounded-lg"
            rows={3}
            required
          />
        </div>

        <button
          onClick={handleAddReview}
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-lg mt-2 w-full hover:bg-blue-600"
        >
          Submit Review
        </button>
      </div>
    </div>
  );
};

export default Reviews;
