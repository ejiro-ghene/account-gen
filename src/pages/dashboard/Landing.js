import React from "react";
import "./Landing.css";
import {
  Adidas,
  Amazon,
  Header,
  Outlook,
  Yahoo,
  Nike,
  Gmail,
  Time,
  Easy,
  Reliable,
  Image1,
} from "../../assets";
import { Navbar, Sidebar, Footer } from "../../components";

function Landing() {
  return (
    <>
      <main className="min-h-screen ">
        <Navbar className="" />
        <header className="relative ">
          <div>
            <img className="block" src={Header} alt="" />
          </div>

          <div className="btn flex gap-4">
            <div>
              <button className="b-1  text-xl ">REGISTER</button>
            </div>
            <div>
              <button className="b-2  h-12 text-xl  ">SIGN IN</button>
            </div>
          </div>
        </header>

        <section className="grid grid-cols-2 gap-20 h-96">
          <div className="m-24  h-72">
            <h1 className="font-semibold ml-7 text-2xl">
              Create multiple accounts very easily with just one click
            </h1>
            <p className="text-center mt-10 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              rhoncus lacinia lorem, iaculis mollis ligula consequat vitae. In
              vehicula nisl imperdiet neque sagittis, sit amet sodales ex
              eleifend. Integer facilisis tortor sollicitudin, accumsan felis
              ut, cursus erat. Nulla faucibus sapien vitae lacus malesuada
              vestibulum.
            </p>
          </div>
          <div className="m-24 shadow-2xl h-72 grid grid-cols-3 gap-4">
            <div>
              <img className="block" src={Outlook} alt="" />
            </div>
            <div>
              <img className="block" src={Amazon} alt="" />
            </div>
            <div>
              <img className="block" src={Nike} alt="" />
            </div>
            <div>
              <img className="block" src={Gmail} alt="" />
            </div>
            <div>
              <img className="block" src={Adidas} alt="" />
            </div>
            <div>
              <img className="block" src={Yahoo} alt="" />
            </div>
          </div>
        </section>

        <section className="infograph h-80 text-white">
          <div className="m-14 text-center text-sm grid  grid-cols-3 gap-5">
            <div className="m-14 text-center text-sm">
              <div className="flex justify-center">
                <img className=" w-14 " src={Easy} alt="" />
              </div>
              <h1 className="text-2xl font-semibold">Easy to Use</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                in veritatis maxime dolorum, quis labore esse facere non nihil
                cupiditate dolores ea? At, et delectus? Aliquid doloribus
                voluptatem voluptatum dignissimos.
              </p>
            </div>

            <div className="m-14 text-center text-sm">
              <div className="flex justify-center">
                <img className=" w-14" src={Time} alt="" />
              </div>
              <h1 className="text-2xl font-semibold">Save Time</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                accusantium eos ducimus commodi alias. Aspernatur, sed. Ex
                aperiam vel a quidem suscipit quos at dolores, nemo, delectus
                voluptatibus, officiis debitis.
              </p>
            </div>

            <div className="m-14 text-center text-sm">
              <div className="flex justify-center">
                <img className=" w-14" src={Reliable} alt="" />
              </div>
              <h1 className="text-2xl font-semibold">Reliable</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Laborum velit vel iusto repellendus distinctio odit dolor dicta,
                nostrum fugiat libero ut voluptatibus perspiciatis accusamus
                repellat ab, quidem modi! Ullam, iure.
              </p>
            </div>
          </div>
        </section>

        <section className="login-screenshot h-72 m-48 grid grid-cols-2 gap-20">
          <div>
            <img className="block" src={Image1} alt="" />
          </div>
          <div>
            <h1 className="font-semibold text-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </h1>
            <p className="text-base pt-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              rhoncus lacinia lorem, iaculis mollis ligula consequat vitae. In
              vehicula nisl imperdiet neque sagittis, sit amet sodales ex
              eleifend. Integer facilisis tortor sollicitudin, accumsan felis
              ut, cursus erat. Nulla faucibus sapien vitae lacus malesuada
              vestibulum.
            </p>
          </div>
        </section>

        <section className="h-48 mt-40">
          <header className="font-semibold text-4xl flex justify-center">
            Our Custom Plans
          </header>
          <p className="flex justify-center text-xl text-center pt-4">
            We have taken time to create plans that <br /> have been tailor made
            just for you
          </p>
        </section>
        <section></section>
        <section></section>
        <section></section>
        <section></section>
        <Footer />
      </main>
    </>
  );
}

export { Landing };
