"use client";
import React, { useState } from "react";
const User = require("../models/User");
function Signup() {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = new User(formData);
    console.log(user);
    // await user.save();

    console.log("Form submitted with data:", formData);
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col gap-5 lg:mx-20 lg:gap-10 lg:flex-row">
        <div className="text-center lg:text-left">
          <h1 className="lg:text-5xl text-3xl font-bold text-center">
            Sign up Now!
          </h1>
          <p className="py-6 text-justify">
            Welcome to <b>Fast Electronic Work</b>, your one-stop destination
            for top-tier security solutions! <br></br>Sign up now to unlock
            exclusive access to our comprehensive range of security cameras,
            door locks, home automation, smart lock and more.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                placeholder="Email"
                className="input input-bordered"
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone No.</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                placeholder="03XX-XXXXXXX"
                className="input input-bordered"
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                placeholder="Password"
                className="input input-bordered"
                onChange={handleInputChange}
                required
              />

              <label className="label">
                <p className="text-1xl text-center">
                  Already have an account?{" "}
                  <a
                    href="/login"
                    className="label-text-alt link text-center link-hover"
                  >
                    Login here
                  </a>
                </p>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
