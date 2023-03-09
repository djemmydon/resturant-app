import { useState } from "react";
import { Link } from "react-router-dom";
import NavCart from "./NavCart";
import styled from "styled-components";
import useTotal from "../redux/total";
import { useDispatch } from "react-redux";
import { cartActions } from "../redux/product";

// className={`${link}`}

function Navbar() {
  const [search, setSearch] = useState(false);

  const [open, setOpen] = useState(true);
  const [nav, setNav] = useState(false);
  const { totalQty } = useTotal();
  const dispatch = useDispatch();

  const handleOpen = () => {
    setOpen(!open);
  };
  const handleOpenNav = () => {
    setNav(!nav);
  };

  return (
    <Body>
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

        <NavbarFlexBody className="shadow-xl">
          <div className="nav_content">
            <ul className="">
              <li className=" ">
                <Link to="/">Home</Link>
              </li>
              <li className=" group ">
                <Link to="/products">Shop</Link>
              </li>
              <li className=" ">
                <Link to="/#">Contact</Link>
              </li>
              <li className=" ">
                <Link to="/#">About</Link>
              </li>
            </ul>
          </div>
          <div className="logo">
            <h1>
              {" "}
              <span className="material-symbols-outlined text-2xl">
                shopping_cart
              </span>
              MARKET4ALL
            </h1>
          </div>
          <div className=" flex">
            <div className=" bg-grey w-[1px] mx-4 hidden  md:flex"></div>

            <div className=" flex items-center gap-2 md:gap-5">
              <div
                onClick={handleOpen}
                className=" flex flex-col justify-center items-center cursor-pointer relative"
              >
                <span className=" absolute w-4 h-4 rounded-full -right-1 -top-0 text-center text-xs bg-[#fff] text-[#ed1d24]    cursor-pointer">
                  {totalQty}
                </span>
                <span className="material-symbols-outlined text-2xl">
                  shopping_cart
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

              <div
                className="cursor-pointer"
                onClick={() => dispatch(cartActions.toggle({ type: "OPEN" }))}
              >
                <span className="material-symbols-outlined  text-2xl">
                  person
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
            </div>
          </div>
          <NavCart handleOpen={handleOpen} open={open} />
        </NavbarFlexBody>

        {/* Mobile Navbar Item */}
        <div
          className={
            nav ? "mobile_nav active shadow-xl" : "mobile_nav shadow-xl"
          }
        >
          <ul className=" ">
            <li className=" " onClick={handleOpenNav}>
              <Link to="/">Women</Link>
            </li>
            <li className=" group " onClick={handleOpenNav}>
              <Link to="/">Men</Link>
            </li>
            <li className=" " onClick={handleOpenNav}>
              <Link to="/">Shop</Link>
            </li>
            <li className=" " onClick={handleOpenNav}>
              <Link to="/">About Us</Link>
            </li>
            <li className=" " onClick={handleOpenNav}>
              <Link to="/">Contact</Link>
            </li>
            <li className=" " onClick={handleOpenNav}>
              <Link to="/">Gallery</Link>
            </li>
          </ul>
        </div>
      </nav>
    </Body>
  );
}

export default Navbar;

const Body = styled.div`
  .mobile_nav {
    width: 300px;
    background-color: red;
    position: fixed;
    height: 100%;
    background-color: #fff;
    z-index: 100;
    margin-top: 3rem;
    padding: 1rem 0;
    /* transform: scaleX(0); */
    transition: 0.5s ease-in-out;
    left: -100%;

    ul {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      padding: 1rem;

      li {
        font-size: 1rem;
        border-bottom: 0.3px solid grey;
      }
    }
  }

  .mobile_nav.active {
    left: 0;
  }
`;

const NavbarFlexBody = styled.div`
  display: flex;
  justify-content: space-between;
  color: #000;
  height: 60px;
  position: fixed;
  left: 0;
  width: 100%;
  background-color: #fff;
  z-index: 200;
  top: 0;
  padding: 0 1rem;

  .nav_content {
    height: 100%;
    padding: 0 1rem;
    ul {
      height: 100%;
      display: flex;
      gap: 2rem;
      align-items: center;

      li {
      }
    }

    @media screen and (max-width: 700px) {
      display: none;
    }
  }

  .logo {
    display: flex;
    height: 100%;
    align-items: center;

    h1 {
      display: flex;
      align-items: center;
      font-size: 2rem;
      span {
        font-size: 2rem;
        color: red;
      }
    }

    @media screen and (max-width: 700px) {
      h1 {
        font-size: 1rem;
        span {
          font-size: 1rem;
        }
      }
    }
  }
`;

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

  .search.active {
    height: 100vh;
    top: 0;
    opacity: 1;

    transform: translate(360deg);

    transition: 0.5s ease;
  }
`;
