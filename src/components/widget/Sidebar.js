import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import { FaUserCircle } from "react-icons/fa";
import { Clipboard, Settings, User } from "../../assets";

function Sidebar() {
  const handleLogout = () => {
    localStorage.clear();
    window.location.pathnamme = "/login";
  };
  return (
    <>
      <div className=" absolute min-h-screen md:flex ">
        {/* mobile menu bar */}
        <div className=" bg-red-800 flex justify-between md:hidden w-screen">
          {/* menu button */}
          <button className=" mobile-menu-button p-4 focus:outline-none focus:bg-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        {/* sidebar */}
        <div className="sidenav md:w-48 text-lg font-bold text-white space-y-6 px-5 py-16 -inset-y-0 left-0 transform absolute -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
          <nav className="grid space-y-20 py-16">
            <Link
              to="/dashboard"
              className=" grid  grid-cols-2 block py-3 px-4 rounded hover:bg-gray-700"
            >
              <div className="w-12">
                <img src={User} alt="" />
              </div>
              Account
            </Link>

            <Link
              to="/task"
              className="grid  grid-cols-2 block py-3 px-4 rounded hover:bg-gray-700"
            >
              <div className="w-12 grid ">
                <img src={Clipboard} alt="" />
              </div>
              Task
            </Link>

            <Link
              to="/setting"
              className="grid  grid-cols-2 block py-3 px-4 rounded hover:bg-gray-700"
            >
              <div className="w-12 grid ">
                <img
                  src={Settings}
                  alt="
              "
                />
              </div>
              Setting
            </Link>
          </nav>
        </div>
      </div>

      {/* <div className="w-full">ggg</div> */}
      {/* <section className="sidenav absolute inset-y-0 w-44 ">
        
        <section className="side-text flex justify-center py-10 text-white ">
          <nav className="grid  space-y-20 py-16">
            <Link to="/task">
              <button className="">
                <a className=" py-3 px-10 rounded hover:bg-gray-700">Task</a>
              </button>
            </Link>

            <Link to="/proxy">
              <button className="">
                <a className=" py-3 px-10 rounded hover:bg-gray-700 ">Proxy</a>
              </button>
            </Link>

            <button className="">
              <a className=" py-3 px-10 rounded hover:bg-gray-700">Account</a>
            </button>

            <Link to="/setting">
              <button className="">
                <a className=" py-3 px-10 rounded hover:bg-gray-700">Setting</a>
              </button>
            </Link>

            <button className="w-36 h-11" onClick={handleLogout}>
              Logout
            </button>
          </nav>
        </section>
      </section> */}
    </>
  );
}

export { Sidebar };
