import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import NavCart from "./NavCart";

const link = " text-orangee"

// className={`${link}`}

function Navbar() {
  const cart = useSelector((state) => state.cart);
  const { allTotalPrice, totalQty } = cart;

  const [open, setOpen] = useState(true);
  const [nav, setNav] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  const handleOpenNav = () => {
    setNav(!nav);
  };
  return (
    <nav className=" relative h-full">
      <div className="w-full h-28 flex items-center justify-between md:justify-around fixed z-20 bg-white">
        <div className=" h-16 flex flex-col items-center">
          <img className="h-full" src={Logo} alt="" />
          {/* <span className="text-orangee text-2xl font-bold">YuMmY</span> */}
        </div>

        <div className="hidden md:block">
          <ul className=" flex gap-8 justify-center tems-center">
            <li className=" text-2xl font-bold text-grey transition ease-in-out hover:text-orangee">
              <Link to="/">Home</Link>
            </li>
            <li className=" group text-2xl font-bold text-grey transition ease-in-out hover:text-orangee">
              <Link to="/">
                Shop
                <ul className="absolute hidden group-hover:block transition-all w-[200px] bg-orangee">
                  <li className="text-white hover:text-orangee hover:ease-in-out hover:duration-300 text-xl p-2 hover:bg-white text-orange">
                    <Link>Sharwama</Link>
                  </li>
                  <li className="text-white hover:text-orangee text-xl p-2 hover:bg-white text-orange hover:ease-in-out hover:duration-300">
                    <Link>Pizza</Link>
                  </li>
                  <li className="text-white hover:text-orangee text-xl p-2 hover:bg-white text- hover:ease-in-out hover:duration-300">
                    <Link>Burga</Link>
                  </li>
                </ul>
              </Link>
            </li>
            <li className=" text-2xl font-bold text-grey transition ease-in-out hover:text-orangee">
              <Link to="/">Contact</Link>
            </li>
            <li className=" text-2xl font-bold text-grey transition ease-in-out hover:text-orangee">
              <Link to="/">About</Link>
            </li>
          </ul>
        </div>

        <div className=" flex">
          <div className=" flex-col justify-between hidden  md:flex ">
            <span className="">Call for Order</span>
            <p className=" text-xl text-orangee font-bold">{`+2348 542 3449 570`}</p>
          </div>

          <div className=" bg-orangee w-[1px] mx-4 hidden  md:flex"></div>

          <div className=" flex items-center gap-3">
            <div
              onClick={handleOpen}
              className=" flex flex-col justify-center items-center cursor-pointer relative"
            >
              <span className=" absolute w-8 h-5 -top-4 text-center text-xs bg-orangee  flex flex-col text-white px-1 py-1 cursor-pointer">
                {totalQty} 
              </span>
              <span class="material-symbols-outlined text-3xl">shopping_cart</span>
            </div>

            <div onClick={handleOpenNav} className="cursor-pointer block md:hidden">
              <span className="material-symbols-outlined  text-3xl">menu</span>
            </div>

            <div className="cursor-pointer">
              <span className="material-symbols-outlined  text-3xl">search</span>
            </div>
          </div>
        </div>
        <NavCart handleOpen={handleOpen} open={open} />
      </div>
      <div
        className={
          nav
            ? "  fixed block md:hidden top-28 z-10  bg-white w-full ease-in-out duration-300 py-20"
            : "absolute block md:hidden -top-96  z-10  bg-white w-full ease-in-out duration-300 py-20"
        }
      >
        <ul className=" flex gap-8 justify-center flex-col items-center">
          <li className=" text-2xl font-bold text-grey transition ease-in-out hover:text-orangee">
            <Link to="/">Home</Link>
          </li>
          <li className=" group text-2xl font-bold text-grey transition ease-in-out hover:text-orangee">
            <Link to="/">
              Shop
              {/* <ul className="absolute hidden group-hover:block transition-all w-[200px] bg-orangee">
                <li className="text-white hover:text-orangee hover:ease-in-out hover:duration-300 text-xl p-2 hover:bg-white text-orange">
                  <Link>Sharwama</Link>
                </li>
                <li className="text-white hover:text-orangee text-xl p-2 hover:bg-white text-orange hover:ease-in-out hover:duration-300">
                  <Link>Pizza</Link>
                </li>
                <li className="text-white hover:text-orangee text-xl p-2 hover:bg-white text- hover:ease-in-out hover:duration-300">
                  <Link>Burga</Link>
                </li>
              </ul> */}
            </Link>
          </li>
          <li className=" text-2xl font-bold text-grey transition ease-in-out hover:text-orangee">
            <Link to="/">Contact</Link>
          </li>
          <li className=" text-2xl font-bold text-grey transition ease-in-out hover:text-orangee">
            <Link to="/">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
