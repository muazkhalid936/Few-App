import React from "react";

function Card(props) {
  return (
    <div className="relative overflow-hidden rounded-md group w-80 shadow-lg mx-auto bg-slate-400">
      <div className="absolute rounded-sm lg:inset-0 lg:bg-gradient-to-b lg:from-transparent lg:to-black lg:opacity-0 lg:z-10 lg:transition-opacity lg:duration-300 lg:group-hover:opacity-50 "></div>
      <div className="card card-compact bg-base-100 rounded">
        <figure>
          <img width={"200px"} height={"300"} src={props.name} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary z-10">View Product</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
