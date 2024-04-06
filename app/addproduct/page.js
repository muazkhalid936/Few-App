'use client'
import React, { useState } from "react";

const ProductForm = () => {
  const [product, setProduct] = useState({
    name: "",
    quantity: "",
    price: "",
    category: "",
    image: "",
    features: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleImageChange = (event) => {
    // Handle image change separately if needed
  };

  const handleAddProduct = () => {
    // Handle adding product here
    console.log("Product details:", product);
    // You can perform further actions like sending the data to an API, etc.
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md bg-slate-400 p-10 rounded-lg grid grid-flow-row gap-3">
          <input
            type="text"
            name="name"
            value={product.name}
            placeholder="Product name"
            className="input input-bordered w-full max-w-xs"
            onChange={handleInputChange}
          />
          <input
            type="number"
            name="quantity"
            value={product.quantity}
            placeholder="Quantity"
            className="input input-bordered w-full max-w-xs"
            onChange={handleInputChange}
          />
          <input
            type="number"
            name="price"
            value={product.price}
            placeholder="Price"
            className="input input-bordered w-full max-w-xs"
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="category"
            value={product.category}
            placeholder="Category"
            className="input input-bordered w-full max-w-xs"
            onChange={handleInputChange}
          />
          <input
            type="file"
            name="image"
            onChange={handleImageChange}
            className="input input-bordered w-full max-w-xs"
          />
          <textarea
            name="features"
            value={product.features}
            placeholder="Features"
            className="input input-bordered h-32 w-full max-w-xs"
            onChange={handleInputChange}
          />
          <div className="items-center">
            <button
              className="btn btn-primary btn-wide"
              onClick={handleAddProduct}
            >
              Add Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductForm;
