"use client";
import React, { useState } from "react";

function Signup() {
  const [formData, setFormData] = useState({
    emailOrPhone: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with data:", formData);
  };

  return (
    <div className="hero min-h-screen bg-base-200 ">
      <div className="hero-content flex-col gap-5 lg:mx-20 lg:gap-10 lg:flex-row">
        <div className="text-center lg:text-left">
          <h1 className="lg:text-5xl text-3xl  font-bold text-center">
            Login Now!
          </h1>
          <p className="py-6 text-justify">
            Welcome to <b>Fast Electronic Work</b>, your one-stop destination
            for top-tier security solutions! <br></br>Log in now to unlock
            exclusive access to our comprehensive range of security cameras,
            door locks, home automation, smart lock and more.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email or Phone No.</span>
              </label>
              <input
                type="text"
                name="emailOrPhone"
                value={formData.emailOrPhone}
                placeholder="Email or Phone No."
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
                placeholder="password"
                className="input input-bordered"
                onChange={handleInputChange}
                required
              />

              <label className="label -my-3">
                <p className="text-1xl text-center">
                  <a
                    href="#"
                    className="label-text-alt link underline link-hover"
                  >
                    <br />
                    Forget Password?
                  </a>
                </p>
              </label>
              <label className="label">
                <p className="text-1xl text-center">
                  Don't have an account?
                  <a
                    href="/signup"
                    className="label-text-alt link underline link-hover"
                  >
                    <br />
                    Sign Up
                  </a>
                </p>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
