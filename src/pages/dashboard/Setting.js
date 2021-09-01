import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Sidebar } from "../../components";
import "./Setting.css";
import Proxyy from "./Proxyy";

const Setting = () => {
  const [list, setList] = useState([
    // { input: "fff", id: 1 },
    // { input: "ffssf", id: 2 },
  ]);
  const addList = (input) => {
    setList([...list, { input }]);
  };

  return (
    <>
      <Sidebar />
      <section className="relative setting-container min-h-screen ml-48">
        <div className="p-10">
          <section className="setting-section rounded">
            <form className="grid mx-12 pt-5">
              <label className="text-white text-md sm:text-">
                Discord Webhook
              </label>
              <input
                className="text-black rounded input1"
                type="email"
                placeholder="Discord Webhook"
              />
            </form>
            <form className="grid mx-12 my-4">
              <label className="text-white text-md sm:text-">
                SMS-Active.ru API Key
              </label>
              <input
                className="text-black rounded input1"
                type="tel"
                name=""
                id=""
                placeholder="SMS-Active.ru API Key"
              />
            </form>

            <header className="text-white ml-12 mt-10">Proxy:</header>
            <section className="flex justify-center">
              <div className="text-list m-12 rounded text-white font-thin">
                <ul>
                  {list.map((content) => {
                    return <li key={content.id}>{content.input}</li>;
                  })}
                </ul>
                <Proxyy addList={addList} />
              </div>
            </section>
          </section>
        </div>
      </section>
    </>
  );
};

export { Setting };
