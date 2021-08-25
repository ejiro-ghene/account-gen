import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Logo2 } from "../../assets";

function Navbar() {
  return (
    <nav className="nav-acct grid grid-col-2">
      <div className="nav-container   ">
        <img className=" mt-3 w-28 block" src={Logo2} alt="" />
      </div>
      <div className=" nav-text flex justify-between text-xl">
        <Link to="/about">About</Link>
        <Link to="/about">Support</Link>
        <Link to="/about">Contact us</Link>
        <div>English</div>
        <button className="w-28 h-9">Sign In</button>
      </div>
    </nav>
  );
}

export { Navbar };
