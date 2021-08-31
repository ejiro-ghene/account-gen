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
    </>
  );
}

export { Proxyy };
