import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import { FaUserCircle } from "react-icons/fa";

function Sidebar() {
  return (
    <>
      <section className="sidenav absolute inset-y-0 w-44 ">
        {/* <section className="user-profile-container py-5 px-2">
          <button className="user-profile-button w-44 flex justify-between p-2 ">
            <div className="avatar-icon text-4xl">
              <FaUserCircle />
            </div>

            <div className="profile-id text-white ">
              <h4 className="">Michael</h4>
              <h6 className="active-text text-xs ">Active</h6>
            </div>
          </button>
        </section> */}

        <section className="side-text flex justify-center py-10 text-white ">
          <nav className="grid  space-y-20 py-16">
            <Link to="/task">
              <button className="">
                <a href="" className=" py-3 px-10 rounded hover:bg-gray-700">
                  Task
                </a>
              </button>
            </Link>

            <button className="">
              <a href="" className=" py-3 px-10 rounded hover:bg-gray-700 ">
                Proxy
              </a>
            </button>

            <button className="">
              <a href="" className=" py-3 px-10 rounded hover:bg-gray-700">
                Account
              </a>
            </button>

            <button className="">
              <a href="" className=" py-3 px-10 rounded hover:bg-gray-700">
                Setting
              </a>
            </button>
          </nav>
          {/* <button>
            <h3 className="  ">Task</h3>
          </button>
          <button>
            <h3 className="  ">Proxy</h3>
          </button>
          <button>
            <h3 className="  ">Account</h3>
          </button>
          <button>
            <h3 className="  ">Setting</h3>
          </button> */}
        </section>
      </section>
    </>
  );
}

export { Sidebar };
