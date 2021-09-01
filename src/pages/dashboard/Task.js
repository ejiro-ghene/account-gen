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
      {/* setting container */}
      <section className="relative task-container min-h-screen ml-44">
        <div className="mx-10 flex p-10 h-screen">
          <section className="task-card p-5 rounded-xl text-white text-sm ">
            <form className="grid m-12">
              <label className="text-xl">Select account:</label>
              <select className="text-black h-10">
                "<option value="google">Google</option>
                <option value="nike">Nike</option>
                <option value="adidas">Adidas</option>
              </select>

              <label className="text-xl mt-4">Recovery</label>
              <input
                type="email"
                name=""
                className="h-10"
                placeholder="recoverymail@gmail.com"
              />

              <label htmlFor="">Number of accounts</label>
              <div className="flex justify-center">
                <input
                  className="font-semibold my-10 text-xl bg-red-600 rounded w-28 "
                  type="submit"
                  Submit
                />
              </div>
            </form>

            {/* <div className="result grid">hhhhhh</div> */}
          </section>
        </div>
      </section>
    </>
  );
}

export { Task };
// if option.value ===

{
  /* <input type="submit" value="Submit" /> */
}
{
  /* <form className="">
              <label className=" text-xl" for="accounts">
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

              <label className="text-xl" for="recovery">
                Recovery mail
              </label>
              <input
                className="text-black"
                type="email"
                name="email"
                placeholder="recoverymail@gmail.com"
              /> */
}

{
  /* <label className=" text-xl" for="quantity">
                Number of accounts
              </label>
              <input
                className="text-black"
                type="number"
                name="quantity"
                min="1"
                max="100"
                placeholder="maximum of 100"
              /> */
}
{
  /* <div className="ml-">
                <input
                  className="font-semibold my-10 text-xl bg-red-600 rounded w-40 "
                  type="submit"
                  Submit
                />
              </div>
            </form> */
}

{
  /* <section className="result my-20 bg-yellow-200 h-full">
              hhhhhhhhhhh
            </section> */
}
