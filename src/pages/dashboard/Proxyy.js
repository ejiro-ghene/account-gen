import React, { useState } from "react";
import { Sidebar, Navbar, Footer } from "../../components";
import { TextArea } from "@thumbtack/thumbprint-react";
import "./Proxyy.css";

function Proxyy() {
  const [name, setName] = React.useState("");

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     alert(`Submitting Name ${name}`);
  //   };

  return (
    <>
      <Sidebar />
      <section className="proxy-container ">
        <div>
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
