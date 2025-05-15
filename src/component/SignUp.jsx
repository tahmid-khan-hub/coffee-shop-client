import React from "react";

const SignUp = () => {
  return (
    <div className="card bg-base-100 max-w-sm mx-auto shrink-0 mt-24 shadow-2xl">
      <div className="card-body">
        <h1 className="text-3xl font-bold">Sign Up now!</h1>
        <form className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          
          <button className="btn btn-neutral mt-4">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
