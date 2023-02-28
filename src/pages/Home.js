import React from "react";
import Bonus from "../components/bonus/Bonus";
import Category from "../components/categories/Category";
import Header from "../components/Header";
import Main from "../components/mainfolders/Main";
import ProductPage from "./ProductPage";


function Home() {
  return (
    <div className=" ">
      <Main />
     <Header name="Featured Product" link="/"  />
      <ProductPage />
     <Header name="Browse Category" link="/"  />

      <Category/>
    </div>
  );
}

export default Home;
