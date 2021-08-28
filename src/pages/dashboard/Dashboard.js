import React from "react";
import { Sidebar, Navbar, Footer } from "../../components";
import { Registration } from "../auth/Registration";
import { MdDelete } from "react-icons/md";
import "./Dashboard.css";

function Dashboard() {
  return (
    <>
      <section>
        <aside>
          <Sidebar />
        </aside>

        <section className="dash-container relative min-h-screen ml-40">
          <section className="dash-task grid grid-col-2 gap-10  ml-14">
            <div className=" mt-16 grid grid-row-2  one">
              <header>Nike request</header>
              <p className="text-sm px-4 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita, laudantium iusto dolorum et dolore neque doloribus
                iste ullam? Repudiandae porro voluptate mollitia pariatur
                dignissimos. Sapiente earum sequi deleniti asperiores quasi.
              </p>
              <div className="flex justify-end px-10 ">
                <MdDelete />
              </div>
            </div>

            <div className=" mt-16 grid grid-row-2  two">
              <header>Nike request</header>
              <p className="text-sm px-4 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita, laudantium iusto dolorum et dolore neque doloribus
                iste ullam? Repudiandae porro voluptate mollitia pariatur
                dignissimos. Sapiente earum sequi deleniti asperiores quasi.
              </p>
              <div className="flex justify-end px-10 ">
                <MdDelete />
              </div>
            </div>

            <div className=" mt-16 grid grid-row-2  three">
              <header>Nike request</header>
              <p className="text-sm px-4 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita, laudantium iusto dolorum et dolore neque doloribus
                iste ullam? Repudiandae porro voluptate mollitia pariatur
                dignissimos. Sapiente earum sequi deleniti asperiores quasi.
              </p>
              <div className="flex justify-end px-10 ">
                <MdDelete />
              </div>
            </div>

            <div className=" mt-16 grid grid-row-2  four">
              <header>Nike request</header>
              <p className="text-sm px-4 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita, laudantium iusto dolorum et dolore neque doloribus
                iste ullam? Repudiandae porro voluptate mollitia pariatur
                dignissimos. Sapiente earum sequi deleniti asperiores quasi.
              </p>
              <div className="flex justify-end px-10 ">
                <MdDelete />
              </div>
            </div>
          </section>

          {/* for the proxy */}
          <div className=" mt-16 grid grid-row-2 absolute  top-10 ml-20 proxy">
            <div className="flex justify-end px-10 ">
              <MdDelete />
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export { Dashboard };
