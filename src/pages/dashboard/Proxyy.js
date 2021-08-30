import React, { useState } from "react";
import { Sidebar } from "../../components";
import { TextArea } from "@thumbtack/thumbprint-react";
import "./Proxyy.scss";

function Proxyy() {
  const [name, setName] = React.useState("");

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     alert(`Submitting Name ${name}`);
  //   };

  return (
    <>
      <aside>
        <Sidebar />
      </aside>
      <section className="proxy-container w-auto ml-40">
        <div className="proxy-text p-40 ">
          <label>
            <TextArea
              type="text"
              value={name}
              placeholder="Type something..."
              onChange={(v) => setName(v)}
            />
          </label>
          {/* <input type="submit" value="Submit" /> */}
        </div>
      </section>
    </>
  );
}

export { Proxyy };
