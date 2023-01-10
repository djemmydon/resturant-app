import React from "react";
import Bonus from "../components/bonus/Bonus";
import Main from "../components/mainfolders/Main";
import ProductPage from "./ProductPage";


function Home() {
  return (
    <div className=" w-full  ">
      <Main />
      <ProductPage />
      <Bonus/>
    </div>
  );
}

export default Home;
