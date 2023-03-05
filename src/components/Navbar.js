import React, { useEffect, useState } from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import NavCart from "./NavCart";
import styled from "styled-components";
import { cartActions } from "../redux/product";



// className={`${link}`}

function Navbar() {
  const [search, setSearch] = useState(false);
  // const cart = useSelector((state) => state.cart);
  const totalItems = useSelector((state) => state.cart.totalQty);
  const dispatch = useDispatch()

  const [open, setOpen] = useState(true);
  const [nav, setNav] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  const handleOpenNav = () => {
    setNav(!nav);
  };


  // useEffect(() => {
  //   dispatch(cartActions.getCartTotal())
  // }, [dispatch])
  
  return (
    <>
      <nav className=" relative h-full ">
        
          <>
            <Search>
              <div className={search ? `search active` : `search`}>
                <div className="w-full ">
                  <div className="float-right p-5 cursor-pointer">
                    <span
                      className="material-symbols-outlined text-3xl"
                      onClick={() => setSearch(!search)}
                    >
                      close
                    </span>
                  </div>
                  <input
                    placeholder="search"
                    className="w-full h-14 px-2 border-2"
                  />
                </div>

                <div className="h-full bg-white">
                  <div className="flex justify-center items-center h-full">
                    <h2>No result found😒😒</h2>
                  </div>
                </div>
              </div>
            </Search>
          </>
        

        <div className=" bg-[#ed1d24] text-white w-full h-28 flex items-center justify-between md:justify-around fixed z-20 ">
          <div className=" h-16 flex flex-col items-center">
            <img className="h-full" src={Logo} alt="" />
            {/* <span className="text-orangee text-2xl font-bold">YuMmY</span> */}
          </div>

          <div className="hidden md:block">
            <ul className=" flex gap-8 justify-center tems-center">
              <li className=" text-md  text-[#fff] transition ease-in-out hover:text-orangee">
                <Link to="/">Home</Link>
              </li>
              <li className=" group text-md  text-[#fff] transition ease-in-out hover:text-orangee">
                <Link to="/">
                  Shop
                  <ul className="absolute hidden group-hover:block transition-all w-[200px] shadow bg-white">
                    <li className="text-[#ed1d24] hover:text-orangee hover:ease-in-out hover:duration-300 text-sm p-2 hover:bg-white text-orange">
                      <Link>Sharwama</Link>
                    </li>
                    <li className="text-[#ed1d24] hover:text-orangee text-sm p-2 hover:bg-white text-orange hover:ease-in-out hover:duration-300">
                      <Link>Pizza</Link>
                    </li>
                    <li className="text-[#ed1d24] hover:text-orangee text-sm p-2 hover:bg-white text- hover:ease-in-out hover:duration-300">
                      <Link>Burga</Link>
                    </li>
                  </ul>
                </Link>
              </li>
              <li className=" text-md  text-[#fff] transition ease-in-out hover:text-orangee">
                <Link to="/">Contact</Link>
              </li>
              <li className=" text-md  text-[#fff] transition ease-in-out hover:text-orangee">
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
                <span className=" absolute w-4 h-4 rounded-full -right-1 -top-0 text-center text-xs bg-[#fff] text-[#ed1d24]    cursor-pointer">
                  {totalItems}
                </span>
                <span className="material-symbols-outlined text-2xl">
                  shopping_cart
                </span>
              </div>

              <div
                onClick={handleOpenNav}
                className="cursor-pointer block md:hidden"
              >
                <span className="material-symbols-outlined  text-2xl">
                  menu
                </span>
              </div>

              <div
                className="cursor-pointer"
                onClick={() => setSearch(!search)}
              >
                <span className="material-symbols-outlined  text-2xl">
                  search
                </span>
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
    </>
  );
}

export default Navbar;

const Search = styled.div`
  /* bg-white flex flex-col justify-center px-10 py-5 z-40 w-full h-screen absolute top-0 right-0  ; */
  transition: 1s;
  

  .search {
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px 20px;
    z-index: 40;
    width: 100%;
    height: 0vh;
    position: fixed;
    top: -10rem;
    right: 0;
    transition: 0.5s ease;
    opacity: 0;
    transform: translate(-0deg);

  }

  .search.active{

    height: 100vh;
    top: 0;
    opacity: 1;

    transform: translate(360deg);

    transition: 0.5s ease;
  }
`;
