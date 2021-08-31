import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Navbar, Footer } from "../../components";
import { Logo } from "../../assets";
import "./Login.css";

const Login = () => {
  const [userData, setUserData] = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState({ value: "" });
  const history = useHistory();
  console.log("auth", localStorage.getItem("isAuthenticated"));

  // const [password, setPassword] = useState("");
  // const [passwordError, setPasswordError] = useState("");

  const [SuccessMsg, setSuccessMsg] = useState("");

  const handleInputChange = (e) => {
    setUserData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
    // setSuccessMsg("");
    // setEmailError("");
    // setEmail(e.target.value);
  };

  // const handlePasswordChange = (e) => {
  //   setSuccessMsg("");
  //   setPasswordError("");
  //   setPassword(e.target.value);
  // };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (userData.email === "" || userData.password === "") {
      setErrorMessage((prevState) => ({
        value: "Empty email/password field",
      }));
    }
    // else fetch from api
    else if (
      userData.email.toLowerCase() === "admin" &&
      userData.password === "123456"
    ) {
      //Signin Success
      localStorage.setItem("isAuthenticated", "true");
      window.location.pathname = "/dashboard";
    } else {
      //If credentials entered is invalid
      setErrorMessage((prevState) => ({ value: "Invalid email/password" }));
      return;
    }
  };

  //   if (email !== "") {
  //     const emailRegex = /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/;
  //     if (emailRegex.test(email)) {
  //       setEmailError("");
  //     } else {
  //       setEmailError("email does not match with our database");
  //     }
  //   } else {
  //     setEmailError("Email Required");
  //   }

  //   if (password !== "") {
  //   } else {
  //     setPasswordError("Password Required");
  //   }
  // };

  return (
    <>
      <main className="acct-login-container min-h-screen mx-14">
        <Navbar />
        <section className="login-card grid grid-cols-2 shadow-xl">
          <section className="login-logo text-white ">
            <Link to="/home">
              <img className=" mt-72 w-48 ml-24" src={Logo} alt="" />
            </Link>
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

              <form className="grid self-center gap-6 mx-20 mt-14">
                <label className="text-xl">Email</label>
                <input
                  className="border border-black "
                  name="email"
                  type="email"
                  onChange={(e) => handleInputChange(e)}
                  // value={email}
                />
                {/* {emailError && <div className="error-msg">{emailError}</div>} */}

                <label className="text-xl"> Password</label>
                <input
                  className="border border-black"
                  name="password"
                  type="text"
                  onChange={(e) => handleInputChange(e)}
                  // value={password}
                />
                {/* {passwordError && (
                  <div className="error-msg">{passwordError}</div>
                )} */}
                <h4 className="reminder  mt-2 text-xl">Forget Password</h4>

                {/* button link */}
                <Link to="/dashboard">
                  <button
                    className="signin h-12 text-xl mt-8"
                    onClick={handleFormSubmit}
                  >
                    Sign In
                  </button>
                </Link>
                <span className="text-gray-500 text-xl">
                  Don't have an account?
                  {/* button link */}
                  <Link to="/dashboard">
                    <button className="login-signup">Signup</button>
                  </Link>
                </span>
                {errorMessage.value && (
                  <p className="text-red-500 text-2xl ">{errorMessage.value}</p>
                )}
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
