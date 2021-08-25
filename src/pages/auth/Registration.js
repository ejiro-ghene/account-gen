import React from "react";
import "./Registration.css";

function Registration() {
  return (
    <>
      <main className="reg-info ">
        <section className="">
          <form className="mt-20 px-8 py-10">
            <h1 className="reg-header">Registration</h1>
            <label className="reg-label">Email</label>
            <input
              className="reg-input"
              type="email"
              name="email"
              id=""
              placeholder="Enter recovery email"
            />

            <label className="reg-label">Password</label>
            <input
              className="reg-input"
              type="password"
              name="password"
              id=""
              placeholder="Enter your password"
            />

            <button className="reg-button" type="submit">
              REGISTER
            </button>
          </form>
        </section>
      </main>
    </>
  );
}

export { Registration };
