import React from "react";
import { Sidebar, Navbar, Footer } from "../../components";
import "./Task.css";

function Task() {
  return (
    <>
      <Sidebar />
      <main className=" min-h-screen grid grid-cols-2 gap-5 ">
        <div className="task-card text-white px-16 pt-24 mt-10 mx-10 h-auto ">
          <form className=" relative  grid self-center gap-6" action="">
            <label className=" text-2xl" for="accounts">
              Select account:
            </label>
            <select name="accounts" id="accounts">
              <option value="google">Google</option>
              <option value="nike">Nike</option>
              <option value="adidas">Adidas</option>
            </select>

            <label className="text-2xl" for="recovery">
              Recovery mail
            </label>
            <input
              type="email"
              name="email"
              placeholder="recoverymail@gmail.com"
            />

            <label className=" text-2xl" for="quantity">
              Number of accounts
            </label>
            <input
              type="number"
              name="quantity"
              min="1"
              max="100"
              placeholder="maximum of 100"
            />
            <div className="ml-28">
              <button className="font-semibold my-20 text-2xl bg-red-600 rounded w-40 ">
                Submit
              </button>
            </div>
            {/* <input type="submit" value="Submit" /> */}
          </form>
        </div>

        <div className="task-card text-white px-16 pt-24 mt-10 mx-10 h-auto">
          <form className=" relative grid self-center gap-6" action="">
            <label className=" text-2xl" for="accounts">
              Select account:
            </label>
            <select name="accounts" id="accounts">
              <option value="google">Google</option>
              <option value="nike">Nike</option>
              <option value="adidas">Adidas</option>
            </select>

            <label className="text-2xl" for="recovery">
              Recovery mail
            </label>
            <input
              type="email"
              name="email"
              placeholder="recoverymail@gmail.com"
            />

            <label className=" text-2xl" for="quantity">
              Number of accounts
            </label>
            <input
              type="number"
              name="quantity"
              min="1"
              max="100"
              placeholder="maximum of 100"
            />
            <div className="ml-28">
              <button className="font-semibold my-20 text-2xl bg-red-600 rounded w-40 ">
                Submit
              </button>
            </div>
            {/* <input type="submit" value="Submit" /> */}
          </form>
        </div>
      </main>
    </>
  );
}

export { Task };
