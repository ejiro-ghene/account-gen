import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Sidebar } from "../../components";
import "./Setting.css";
import Proxyy from "./Proxyy";

function Setting() {
  const [list, setList] = useState([
    // { input: "fff", id: 1 },
    // { input: "ffssf", id: 2 },
  ]);
  const addList = (input) => {
    setList([...list, { input }]);
  };

  const [data, setData] = useState({
    sms_token: "",
    discord_url: "",
    webhook_username: "",
    Proxy: "",
  });

  function submit(e) {
    e.preventDefault();

    let opts = {
      sms_token: data.sms_token,
      discord_webhook_url: data.discord_url,
      discord_username: data.webhook_username,
      proxy: data.Proxy,
    };

    console.log(opts);
    fetch("/api/settings", {
      method: "post",
      body: JSON.stringify(opts),
    })
      .then((r) => r.json())
      .then((response) => {
        console.log(response.message);
      });
  }

  return (
    <>
      <Sidebar />
      {/* @@ -21,38 +50,58 @@ const Setting = () => { */}
      <section className="setting-container rounded relative min-h-screen ml-44">
        <div className="pl-14 pr-9 py-9">
          <section className="setting-section rounded">
            <form className="grid mx-12 pt-5">
              <label className="text-white text-md sm:text-">
                Discord Webhook Discord Webhook URL
              </label>
              <input
                className="text-black rounded input1"
                type="email"
                placeholder="Discord Webhook"
                type="text"
                required
                placeholder=" provide discord webhook url "
                name="discord_url"
              />
            </form>
            <form className="grid mx-12 my-3">
              <label className="text-white text-md sm:text-">
                Webhook Username
              </label>
              <input
                className="text-black rounded input1"
                required
                type="text"
                name="webhook_username"
                placeholder="provide webhook username"
              />
            </form>

            <form className="grid mx-12 my-3">
              <label className="text-white text-md sm:text-">
                SMS-Active.ru API Key
              </label>
              <input
                className="text-black rounded input1"
                type="tel"
                name=""
                id=""
                type="text"
                name="sms_token"
                required
                placeholder="SMS-Active.ru API Key"
              />
            </form>

            <section className="">
              <div className="text-list mt-2 ">
                <ul>
                  {list.map((content) => {
                    return <li key={content.id}>{content.input}</li>;
                  })}
                </ul>
                <Proxyy addList={addList} />
              </div>
            </section>
            <header for="proxy" className="text-white ml-12">
              Proxy(s):
            </header>
            <section className="proxy-container mx-4 mt-1 mx-12">
              <textarea
                className="resize-none border text-box rounded-md w-full p-5  text-white"
                id="proxy"
                name="Proxy"
                required
                cols="30"
                rows="10"
                placeholder="Please provide proxy(s). Press enter to input next proxy for more than one proxy."
              ></textarea>

              <button
                className="signup h-10 text-xl mt-4 mb-9"
                onClick={submit}
              >
                SAVE
              </button>
            </section>

            {/* <label for="proxy">PROXY(S):</label> */}
            {/* <textarea id="proxy" name="Proxy" required rows="4" cols="50">
              Please provide proxy(s). Press enter to input next proxy for more
              than one proxy.
            </textarea> */}
            {/* <button className="signup h-12 text-xl mt-8" onClick={submit}>
              SAVE
            </button> */}
          </section>
        </div>
      </section>
    </>
  );
}
export { Setting };

{
  /* // <header className="text-white ml-12 mt-10">Proxy:</header>
            // <section className="flex justify-center">
            //   <div className="text-list m-12 rounded text-white font-thin">
            //     <ul>
            //       {list.map((content) => { */
}
{
  /* //         return <li key={content.id}>{content.input}</li>;
            //       })}
            //     </ul> */
}
{
  /* //     <Proxyy addList={addList} />
            //   </div> */
}
// const Setting = () => {
//   const [list, setList] = useState([

//   ]);
//   const addList = (input) => {
//     setList([...list, { input }]);
//   };
// const Setting = () => {
//   const [list, setList] = useState([
//     // { input: "fff", id: 1 },
//     // { input: "ffssf", id: 2 },
//   ]);
//   const addList = (input) => {
//     setList([...list, { input }]);
