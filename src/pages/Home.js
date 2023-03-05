import React from "react";
import Bonus from "../components/bonus/Bonus";
import Category from "../components/categories/Category";
import Header from "../components/Header";
import Banner from "../components/mainfolders/Banner";
import Main from "../components/mainfolders/Main";
import ProductPage from "./ProductPage";

function Home() {
  return (
    <div className=" ">
      <Main />

      <div className="">
        <Category />

        <Header name="Featured Product" link="/" />
        <ProductPage />
        <Banner />
      </div>
    </div>
  );
}

export default Home;
