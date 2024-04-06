import React from "react";

export const Product = () => {
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:gap-96 lg:flex-row-reverse">
          <img src="./1.jpeg" className="w-60 lg:w-80 rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Features</h1>
            <ul className="py-6 list-disc">
              <li>Resolution</li>
              <li>Field of View (FOV)</li>
              <li>Night Vision</li>
              <li>Motion Detection Pan</li>
              <li>Tilt</li>
              <li>Zoom (PTZ)</li>
              <li>Two-Way Audio Cloud</li>
              <li>Storage and Local Storage Mobile App Integration</li>
            </ul>
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
``;
