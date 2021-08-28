import React, { useState } from "react";
import { Sidebar, Navbar, Footer } from "../../components";
import "./Task.css";

function Task() {
  const [accountState, setAccountState] = useState("");

  // const handleSubmit = (e) => {
  //   console.log(e);
  //   setAccounts(e.target.value);
  // };

  return (
    <>
      <Sidebar />
      <main className="min-h-screen grid grid-cols-2 gap-y-10 ">
        <div className="task-card rounded-2xl shadow-2xl text-white px-16 pt-24 mt-10 mx-10  ">
          {/* card1 */}
          <form className=" relative  grid self-center gap-6" action="">
            <label className=" text-2xl" for="accounts">
              Select account:
            </label>
            <select
              className="text-black"
              name="accounts"
              id="accounts"
              value={accountState}
              onChange="[(e)=>{
              const selectedAccount= e.target.value;
              setAccountState(selectedAccountState);
            }]"
            >
              "<option value="google">Google</option>
              <option value="nike">Nike</option>
              <option value="adidas">Adidas</option>
            </select>

            <label className="text-2xl" for="recovery">
              Recovery mail
            </label>
            <input
              className="text-black"
              type="email"
              name="email"
              placeholder="recoverymail@gmail.com"
            />

            <label className=" text-2xl" for="quantity">
              Number of accounts
            </label>
            <input
              className="text-black"
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

        {/* card2 */}
        <div className="task-card rounded-2xl shadow-2xl text-white px-16 pt-24 mt-10 mx-10 h-auto">
          <form className=" relative grid self-center gap-6" action="">
            <label className=" text-2xl" for="accounts">
              Select account:
            </label>
            <select className="text-black" name="accounts" id="accounts">
              <option value="google">Google</option>
              <option value="nike">Nike</option>
              <option value="adidas">Adidas</option>
            </select>

            <label className="text-2xl" for="recovery">
              Recovery mail
            </label>
            <input
              className="text-black"
              type="email"
              name="email"
              value=""
              placeholder="recoverymail@gmail.com"
            />

            <label className=" text-2xl" for="quantity">
              Number of accounts
            </label>
            <input
              className="text-black"
              type="number"
              name="quantity"
              min="1"
              max="100"
              value=""
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

        <div className="task-card rounded-2xl shadow-2xl text-white px-16 pt-24 mt-10 mx-10 h-auto ">
          {/* card3 */}
          <form className=" relative  grid self-center gap-6" action="">
            <label className=" text-2xl" for="accounts">
              Select account:
            </label>
            <select className="text-black" name="accounts" id="accounts">
              <option value="google">Google</option>
              <option value="nike">Nike</option>
              <option value="adidas">Adidas</option>
            </select>

            <label className="text-2xl" for="recovery">
              Recovery mail
            </label>
            <input
              className="text-black"
              type="email"
              name="email"
              placeholder="recoverymail@gmail.com"
            />

            <label className=" text-2xl" for="quantity">
              Number of accounts
            </label>
            <input
              className="text-black"
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

        {/* card2 */}
        <div className="task-card rounded-2xl shadow-2xl text-white px-16 pt-24 mt-10 mx-10 h-auto">
          <form className=" relative grid self-center gap-6" action="">
            <label className=" text-2xl" for="accounts">
              Select account:
            </label>
            <select className="text-black" name="accounts" id="accounts">
              <option value="google">Google</option>
              <option value="nike">Nike</option>
              <option value="adidas">Adidas</option>
            </select>

            <label className="text-2xl" for="recovery">
              Recovery mail
            </label>
            <input
              className="text-black"
              type="email"
              name="email"
              value=""
              placeholder="recoverymail@gmail.com"
            />

            <label className=" text-2xl" for="quantity">
              Number of accounts
            </label>
            <input
              className="text-black"
              type="number"
              name="quantity"
              min="1"
              max="100"
              value=""
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
// if option.value ===
