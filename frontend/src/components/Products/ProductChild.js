import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../redux/product";

function ProductChild({ item }) {
  const [qty, setQty] = useState(1);
  const carts = useSelector((state) => state.cart);
  const disptch = useDispatch();

  const decrease = () => {
    if (qty >= 0) {
      setQty((prev) => prev - 1);
    }
  };
  const increase = () => {
    setQty((prev) => prev + 1);
  };

  const totalPrice = qty * item.price

  const onAddToCart = () => {
    disptch(cartActions.addToCart({...item,qty, totalPrice }));

    setQty(1)
  };

  console.log(carts);
  return (
    <div key={item.id}>
      <div className="bg-white w-[300px]  md:w-[300px] h-[400px] border-2  border-gray-400 rounded-md flex flex-col items-center ">
        <div className="h-[200px] w-full">
          <img className=" w-full h-full object-cover" src={item.image} alt="product" />
        </div>

        <div className="font-myFont flex flex-col gap-1 my-2 text-center ">
          <h1 className="text-2xl text-orangee font-bold">{item.name}</h1>

          <p className="text-xl text-grey font-bold">${item.price}.00</p>
        </div>

        <div className="flex text-center gap-2 ">
          <div
            onClick={decrease}
            className=" w-6 h-6 pb-8 rounded  bg-orangee text-white flex justify-center content-center cursor-pointer "
          >
            <span className="text-3xl w-full pb-6  cursor-pointer  ">-</span>
          </div>
          <div className=" w-6  bg-white flex justify-center content-center cursor-pointer">
            <span className="text-2xl w-full h-full cursor-pointer ">
              {qty}
            </span>
          </div>
          <div
            onClick={increase}
            className=" w-6 h-6 pb-8 rounded text-white bg-orangee flex justify-center content-center cursor-pointer"
          >
            <span className="   text-2xl w-full h-full cursor-pointer ">+</span>
          </div>
        </div>

        <div onClick={onAddToCart} className=" my-4">
          <button className=" bg-orangee px-5 py-2 transition hover:bg-white hover:border-grey border">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductChild;
