import React from "react";
import { Sidebar } from "../../components";
import "./Setting.css";

function Setting() {
  return (
    <>
      <Sidebar />
      <section className="setting-container h-screen w-auto p-20">
        <form className="setting grid  ml-52">
          <label className="text-white">Discord Webhook</label>
          <input
            className="text-black"
            type="email"
            placeholder="Discord Webhook"
          />

          <label className="text-white">SMS-Active.ru API Key</label>
          <input
            className="text-black"
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
