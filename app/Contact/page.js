import React from "react";

const Contact = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col gap-5 lg:mx-20 lg:gap-10 lg:flex-row">
        <div className="text-center lg:text-left">
          <h1 className="text-3xl lg:text-5xl font-bold ">
            Feel Free to contact Us!
          </h1>
          <p className="py-6">
            Have a question, feedback, or just want to say hello? We'd love to
            hear from you! You can reach us by filling out the form
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone Number</span>
              </label>
              <input
                type="text"
                placeholder="03xx-xxxxxxxx"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Message</span>
              </label>
              <textarea
                type="text"
                placeholder="Your Message"
                className="input input-bordered h-32"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
