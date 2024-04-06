import React from "react";
import Card from "../components/Card";

function Product() {
  return (
    <>
      <div className="text-center w-full font-bold text-white bg-blue-700 text-4xl h-10">
        Our Products
      </div>
      <div className="items-center text-center mt-4 flex justify-center">
        <input
          type="text"
          placeholder="Search Product"
          className="input input-bordered rounded-full lg:w-80 w-64 max-w-xs"
        />
        <button className="btn btn-info rounded-full hidden lg:flex ml-3">Search</button>
      </div>

      <div className="grid my-7 items-center grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10 mx-auto">
        <Card name="1.jpeg" />
        <Card name="2.jpeg" />
        <Card name="3.jpeg" />
        <Card name="1.jpeg" />
        <Card name="1.jpeg" />
      </div>
    </>
  );
}

export default Product;
