import { useState } from "react";
import { Link } from "react-router-dom";
import NavCart from "./NavCart";
import styled from "styled-components";
import useTotal from "../redux/total";
import { useDispatch } from "react-redux";
import { cartActions } from "../redux/product";
import { productsApi } from "../redux/apiSlice";
import Loading from "./Loading";

// className={`${link}`}

function Navbar() {
  const [search, setSearch] = useState(false);
  const [show, handleShow] = useState(false);
  const [open, setOpen] = useState(true);
  const [nav, setNav] = useState(false);
  const { totalQty } = useTotal();
  const [searchInput, setSearchInput] = useState("");
  const {
    data: product,
    isLoading,
    error: isError,
  } = productsApi.useGetSearchProductQuery(searchInput);

  const dispatch = useDispatch();

  const handleOpen = () => {
    setOpen(!open);
  };
  const handleOpenNav = () => {
    setNav(!nav);
  };

  const handleScroll = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else if (window.scrollY < 90) {
      handleShow(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <Body>
      <nav
        className={
          show ? "relative h-full nav_color" : "relative h-full nav_color2"
        }
      >
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
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                />
              </div>

              <div className="h-full bg-white shadow-md rounded">
                <div className="flex  p-4 h-full">
                  {isLoading && (
                    <div className="loader">
                      <Loading />
                    </div>
                  )}

                  {isError && (
                    <div className="loader">
                      <h1>No Result Found</h1>
                    </div>
                  )}

                  {!searchInput && (
                    <div className="flex items-center justify-center w-full">
                      <p>No Result Found</p>
                    </div>
                  )}
                  {searchInput && (
                    <div className="flex flex-col gap-6">
                      {product?.products?.slice(0, 10).map((item) => (
                        <Link
                          to={`/products/${item._id}`}
                          key={item._id}
                          className="flex items-center gap-4"
                          onClick={() => {
                            setSearch(!search);
                            setSearchInput("");
                          }}
                        >
                          <img
                            src={item.image}
                            alt="Search Market4all"
                            className="h-10"
                          />
                          <p className="text-[12px] font-bold">{item.title}</p>
                        </Link>
                      ))}
                    </div>
                  )}

                  {fetch.length === 0 && <Body>Something Went Wrong</Body>}
                </div>
              </div>
            </div>
          </Search>
        </>

        <NavbarFlexBody className="shadow-md">
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
                <span className=" absolute w-4 h-4 rounded-full -right-1 -top-0 text-center text-xs bg-[#ed1d24] text-[#fff]    cursor-pointer">
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
  .nav_color {
    background-color: white;
    height: 60px;
    position: fixed;
    width: 100%;
    z-index: 100;
    transition: 0.3s;
    color: #000;
  }
  .nav_color2 {
    background-color: #000;
    color: white;
    height: 60px;
    transition: 0.3s;
  }
  .mobile_nav {
    width: 300px;
    background-color: red;
    position: fixed;
    height: 100%;
    background-color: #fff;
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
      color: #000;

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
  position: fixed;
  left: 0;
  width: 100%;
  z-index: 200;
  top: 0;
  height: 60px;
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
    @media screen and (max-width: 400px) {
      h1 {
        font-size: 0.8rem;
        span {
          font-size: 0.8rem;
        }
      }
    }
  }
`;

const Search = styled.div`
  /* bg-white flex flex-col justify-center px-10 py-5 z-40 w-full h-screen absolute top-0 right-0  ; */
  transition: 1s;

  width: 100%;
  position: fixed;
  z-index: 100;

  .search {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px 20px;
    width: 600px;
    margin: 0 auto;
    color: black;
    right: 0;
    transition: 0.5s ease;
    opacity: 0;
    transform: translate(-0deg);
  }

  .search.active {
    height: 600px;
    top: 0;
    opacity: 1;

    transform: translate(360deg);

    transition: 0.5s ease;
  }
`;
