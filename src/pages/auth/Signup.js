import React from "react";
import { Navbar, Sidebar, Footer } from "../../components";
import { Logo } from "../../assets";
import "./Signup.css";

function Signup() {
  return (
    <>
      <main className="acct-signup-container min-h-screen mx-14">
        <Navbar />
        <section className="signup-card grid grid-col-2 shadow-xl">
          <section className="signup-logo text-white ">
            <img className=" mt-72 w-48 ml-24" src={Logo} alt="" />
            <div className=" mt-28">
              <header className="mx-4 font-semibold text-4xl">
                ALL IN ONE GENERATOR
              </header>
              <h3 className="mx-14 text-xl text-center">
                EASILY LOG INTO MULTIPLE ACCOUNTS
              </h3>
            </div>
          </section>

          <section className="signup-container">
            <fieldset>
              <legend></legend>
              <header className="mt-20 flex justify-center font-semibold text-2xl ">
                LOGIN
              </header>
              <form className="grid self-center gap-6 mx-20 mt-14">
                <label className="text-xl">Email</label>
                <input
                  className="border border-black "
                  name="email"
                  type="email"
                />

                <label className="text-xl"> Password</label>
                <input
                  className="border border-black"
                  name="password"
                  type="text"
                />
                <h4 className="reminder  mt-2 text-xl">Forget Password</h4>
                <button className="signup h-12 text-xl mt-8">Sign Up</button>
                {/* <span className="text-gray-500 text-xl">
                  Don't have an account?
                  <button className="signup">Signup</button>
                </span> */}
              </form>
            </fieldset>

            {/* <section className="recaptcha grid grid-cols-2">
              <div>
                <input className="check w-20" type="checkbox" />
              </div>
              <div className="recaptcha-checkbox">
                <h3>I'm not a robot</h3>
              </div>
              <div className="recaptcha-icon flex justify-end">
                <h3>reCaptcha</h3>
                <h3>Privacy. terms</h3>
              </div>
            </section> */}
          </section>
        </section>
      </main>
      <Footer />
    </>
  );
}

export { Signup };
