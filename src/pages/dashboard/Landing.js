import React from "react";
import { Link } from "react-router-dom";
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
  Header1,
  Img,
} from "../../assets";
import { Navbar, Sidebar, Footer } from "../../components";

function Landing() {
  return (
    <>
      <main className="min-h-screen ">
        <Navbar />
        <header className="relative ">
          <div>
            <img
              className="object-cover w-full header-img "
              src={Header1}
              alt=""
            />
            <div className=" header-overlay absolute inset-0"></div>
          </div>
          <img
            className=" logo-header absolute flex justify-center"
            src={Img}
            alt=""
          />
          <div className="header-text absolute ">
            <h1 className="font-semibold text-6xl flex justify-center">
              ALL IN ONE GENERATOR
            </h1>
            <h6 className="flex justify-center font-semibold text-2xl mt-5">
              EASILY LOG INTO MULTIPLE ACCOUNTS.
            </h6>
          </div>
          <div className="btn flex gap-4">
            <Link to="/signup">
              <button className="b-1  text-xl ">REGISTER</button>
            </Link>
            <Link to="/login">
              <button className="b-2  h-12 text-xl  ">SIGN IN</button>
            </Link>
          </div>
        </header>

        <section className="grid grid-cols-2 gap-20">
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

          <div className="m-20 shadow-2xl  grid grid-cols-3 ">
            <div className="text-center flex justify-center h-20 mt-16">
              <img className="block " src={Outlook} alt="" />
            </div>
            <div className="text-center flex justify-center h-16 mt-16">
              <img className="block " src={Amazon} alt="" />
            </div>
            <div className="text-center flex justify-center h-16 mt-16">
              <img className="block " src={Nike} alt="" />
            </div>
            <div className="text-center flex justify-center h-16 mt-16">
              <img className="block  " src={Gmail} alt="" />
            </div>
            <div className="text-center flex justify-center h-16 mt-16">
              <img className="block " src={Adidas} alt="" />
            </div>
            <div className="text-center flex justify-center h-16 mt-16">
              <img className="block " src={Yahoo} alt="" />
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

        <section className="login-screenshot m-28 grid grid-cols-2 gap-3">
          <img className="block ml-20 mt-5" src={Image1} alt="" />

          <div className="mt-14 mx-10">
            <h1 className="font-semibold text-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </h1>
            <p className="text-base pt-8 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              rhoncus lacinia lorem, iaculis mollis ligula consequat vitae. In
              vehicula nisl imperdiet neque sagittis, sit amet sodales ex
              eleifend. Integer facilisis tortor sollicitudin, accumsan felis
              ut, cursus erat. Nulla faucibus sapien vitae lacus malesuada
              vestibulum.
            </p>
          </div>
        </section>

        <section className="">
          <header className="font-semibold text-4xl flex justify-center">
            Our Custom Plans
          </header>
          <p className="flex justify-center text-lg text-center pt-4">
            We have taken time to create plans that <br /> have been tailor made
            just for you
          </p>
        </section>

        <section className="sub-card grid grid-cols-3">
          <section className="sub-card1 ml-10 w-40 h-60">1</section>
          <section>2</section>
          <section>3</section>
        </section>
        <section></section>
        <section></section>
        <section></section>
        <Footer />
      </main>
    </>
  );
}

export { Landing };

// style={{ border: "1px solid black" }}
