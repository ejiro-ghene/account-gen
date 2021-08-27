import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "../../components";
import { Logo } from "../../assets";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [SuccessMsg, setSuccessMsg] = useState("");

  const handleEmailChange = (e) => {
    setSuccessMsg("");
    setEmailError("");
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setSuccessMsg("");
    setPasswordError("");
    setPassword(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (email !== "") {
      const emailRegex = /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/;
      if (emailRegex.test(email)) {
        setEmailError("");
      } else {
        setEmailError("email does not match with our database");
      }
    } else {
      setEmailError("Email Required");
    }

    if (password !== "") {
    } else {
      setPasswordError("Password Required");
    }
  };

  return (
    <>
      <main className="acct-login-container min-h-screen mx-14">
        <Navbar />
        <section className="login-card grid grid-cols-2 shadow-xl">
          <section className="login-logo text-white ">
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

          <section className="login-container">
            <fieldset>
              <legend></legend>
              <header className="mt-20 flex justify-center font-semibold text-2xl ">
                LOGIN
              </header>
              {SuccessMsg && <div className="success-msg">{SuccessMsg}</div>}
              <form
                className="grid self-center gap-6 mx-20 mt-14"
                onSubmit={handleFormSubmit}
              >
                <label className="text-xl">Email</label>
                <input
                  className="border border-black "
                  name="email"
                  type="email"
                  onChange={handleEmailChange}
                  value={email}
                />
                {emailError && <div className="error-msg">{emailError}</div>}

                <label className="text-xl"> Password</label>
                <input
                  className="border border-black"
                  name="password"
                  type="text"
                  onChange={handlePasswordChange}
                  value={password}
                />
                {passwordError && (
                  <div className="error-msg">{passwordError}</div>
                )}
                <h4 className="reminder  mt-2 text-xl">Forget Password</h4>
                <Link to="/dashboard">
                  <button className="signin h-12 text-xl mt-8">Sign In</button>
                </Link>
                <span className="text-gray-500 text-xl">
                  Don't have an account?
                  <Link to="/dashboard">
                    <button className="login-signup">Signup</button>
                  </Link>
                </span>
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
};

export { Login };

// <div>
{
  /*
</div>
if (emailRegex.test(email)) {
      //   setEmailError("");
      //   if (email === "ad@demo.com") {
      //     setEmailError("");
      //     if (password === "demo") {
      //     } else {
      //       setPassword("Password does not match with the email address");
      //     }
      //   } else {
      //     setEmailError("email does not match with our database");
      //   }
      // }
*/
}
