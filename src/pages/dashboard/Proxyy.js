import React, { useState } from "react";
import { Sidebar } from "../../components";
import { TextArea } from "@thumbtack/thumbprint-react";
import "./Proxyy.css";

const Proxyy = ({ addList }) => {
  const [input, setInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addList(input);
    setInput("");
  };
  return (
    <>
      <section className="proxy-container h-full m-10">
        <form
          className="proxy-form grid grid-cols-2 mx-12 mt-32"
          onSubmit={handleSubmit}
        >
          {/* <label className="text-white"> Proxy:</label> */}

          <input
            className="p-input font-thin mt-16"
            type="text"
            value={input}
            required
            onChange={(e) => setInput(e.target.value)}
          />

          <div className="pl-24">
            <input
              className="s-input bg-green-500 w-40 rounded  mt-16"
              type="submit"
              value="Save"
            />
          </div>
        </form>
      </section>
    </>
  );
};

export default Proxyy;

{
  /* <section className="proxy-container w-auto ml-40">
        <div className="proxy-text p-40 ">
          <label>
            <TextArea
              type="text"
              value={name}
              placeholder="Type something..."
              onChange={(v) => setName(v)}
            />
          </label>
          <input type="submit" value="Submit" />
        </div>
      </section> */
}
