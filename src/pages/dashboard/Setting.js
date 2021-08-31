import React from "react";
import { Link } from "react-router-dom";
import { Sidebar } from "../../components";
import "./Setting.css";

function Setting() {
  return (
    <>
      {/* setting container */}
      <section className="relative setting-container min-h-screen md:flex">
        {/* mobile menu bar */}
        <div className=" bg-red-800 flex justify-between md:hidden">
          {/* menu button */}
          <button className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-700">
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
        <div className="sidebar bg-yellow-900 md:w-52  text-white space-y-6 px-2 py-7 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
          <nav className="grid  space-y-20 py-16">
            <Link to="" className="block py-3 px-4 rounded hover:bg-gray-700">
              Account
            </Link>

            <Link
              to="/task"
              className="block py-3 px-4 rounded hover:bg-gray-700"
            >
              Task
            </Link>

            <Link
              to="/proxy"
              className="block py-3 px-4 rounded hover:bg-gray-700"
            >
              Proxy
            </Link>

            <Link
              to="/setting"
              className="block py-3 px-4 rounded hover:bg-gray-700"
            >
              Setting
            </Link>
          </nav>
        </div>

        <form className="setting grid m-20">
          <label className="text-white text-3xl sm:text-">
            Discord Webhook
          </label>
          <input
            className="text-black h-10"
            type="email"
            placeholder="Discord Webhook"
          />

          <label className="text-white text-3xl sm:text-">
            SMS-Active.ru API Key
          </label>
          <input
            className="text-black h-10"
            type="tel"
            name=""
            id=""
            placeholder="SMS-Active.ru API Key"
          />
        </form>
      </section>
    </>
  );
}

export { Setting };
