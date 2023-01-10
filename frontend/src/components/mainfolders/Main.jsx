import React from "react";
import Discover from "./Discover";
import PlayStore from "../../assets/play-store.svg";
import AppStore from "../../assets/apps-store.svg";
import Shaw from "../../assets/kebab_PNG50.png";

function Main() {
  return (
    <div className="font-myFont  w-full  px-6 bg-[#fdfbf9] top-0  h-full flex align-middle justify-center flex-col-reverse  md:flex-row md:text-center ">
      <div className=" flex flex-col gap-5 align-middle justify-start md:justify-center text-center md:text-start ">
        <div className="mx-auto md:mx-0  bg-orange-500 w-[250px] h-8 text-white text-center flex items-center justify-center">
          <p className="  text-red-100">Fastest Delivery Guaranteed</p>
        </div>

        <div>
          <h1 className="text-4xl  md:text-7xl  font-extrabold text-[#1e1d23]">
            Welcome to <span className="text-[#ffa101]">Yummy</span> <br />{" "}
            Resturant
          </h1>
          <p className="text-1xl text-grey font-bold text-small py-4">
            Get 10% instant off for all order and $200 signup bonus today for
            new registration!
          </p>
        </div>

        <div >
          <div className="flex gap-4 justify-center md:justify-start">
            <div className="flex w-40">
              <img className="flex w-full" src={PlayStore} alt="" />
            </div>

            <div className="flex w-40">
              <img className="flex w-full" src={AppStore} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="sm:w-full md:w-[600px] flex flex-col align-middle justify-center ">
        <img src={Shaw} alt="" />
      </div>
    </div>
  );
}

export default Main;
