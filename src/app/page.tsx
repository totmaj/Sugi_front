// app/page.tsx
import React from "react";
import Head from "next/head";
import ProductDetail from "./component/ProductDetail";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <Head>
        <title>Product Details Page</title>
        <meta
          name="description"
          content="A detailed product page for an e-commerce site."
        />
        <meta
          name="format-detection"
          content="telephone=no, date=no, email=no, address=no"
        />
      </Head>
      <ProductDetail />
    </div>
  );
};

export default Home;
