import React from "react";

export const Product = () => {
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content grid grid-cols-2 gap-80 ">
          <div>
            <h1 className="text-5xl font-bold">Features</h1>
            <p className="py-6">
              <li>Resolution</li>
              <li>Field of View (FOV)</li>
              <li>Night Vision</li>
              <li>Motion Detection Pan</li>
              <li>Tilt</li>
              <li>Zoom (PTZ)</li>
              <li>Two-Way Audio Cloud</li>
              <li>Storage and Local Storage Mobile App Integration</li>
            </p>
          </div>
          <img src="./1.jpeg" className="w-80 rounded-lg shadow-2xl" />
        </div>
      </div>
    </>
  );
};

export default Product;
``;
