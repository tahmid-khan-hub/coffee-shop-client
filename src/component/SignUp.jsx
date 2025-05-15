import React, { use } from "react";
import { AuthContext } from "../contexts/AuthContext";
import Swal from "sweetalert2";

const SignUp = () => {
  const { createUser } = use(AuthContext);
  console.log(createUser);

  const handleSignUp = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const { email, password, ...rest } = Object.fromEntries(
      formData.entries()
    );

    // const userProfile = {
    //     email,
    //     ...rest,
    // }

    // const email = formData.get('email');
    // const password = formData.get('password');
    // console.log(email, password, userProfile);

    // create user in the firebase
    createUser(email, password)
      .then((res) => {
        console.log(res.user);

        const userProfile = {
            email,
            ...rest,
            creationTime: res.user?.metadata?.creationTime,
            lastSignInTime: res.user?.metadata?.lastSignInTime,
        }

        // save profile in DB
        fetch("http://localhost:3000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userProfile),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your account is created",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="card bg-base-100 max-w-sm mx-auto shrink-0 mt-24 shadow-2xl">
      <div className="card-body">
        <h1 className="text-3xl font-bold">Sign Up now!</h1>
        <form onSubmit={handleSignUp} className="fieldset">
          <label className="label">name</label>
          <input type="text" name="name" className="input" placeholder="name" />

          <label className="label">address</label>
          <input
            type="text"
            name="address"
            className="input"
            placeholder="address"
          />

          <label className="label">phone</label>
          <input
            type="text"
            name="phone"
            className="input"
            placeholder="phone"
          />

          <label className="label">photo</label>
          <input
            type="text"
            name="photo"
            className="input"
            placeholder="photo"
          />

          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Email"
          />

          <label className="label">Password</label>
          <input
            type="password"
            name="password"
            className="input"
            placeholder="Password"
          />

          <button className="btn btn-neutral mt-4">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
