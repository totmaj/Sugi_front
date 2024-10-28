import { Review } from "./Review";

export interface Product {
  name: string;
  description: string;
  basePrice: number;
  images: string[];
  price: number; // Price will be updated dynamically
  colorOptions: { [key: string]: number }; // Price adjustments for each color
  sizeOptions: { [key: string]: number }; // Price adjustments for each size
  reviews:Review[]
}
