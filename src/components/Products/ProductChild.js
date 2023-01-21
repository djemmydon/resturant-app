import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
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

  const totalPrice = qty * item.price;

  const onAddToCart = () => {
    disptch(cartActions.addToCart({ ...item, qty, totalPrice }));

    setQty(1);
  };

  console.log(carts);
  return (
    <Body key={item.id}>
      <div className="image">
        <img className=" " src={item.image} alt="product" />
      </div>
      <div className="flex_body">
        <div className="text">
          <h1 className="">{item.name}</h1>

          <p className="">
            {" "}
            <span> ${item.price}.00</span> ${item.price}.00
          </p>
        </div>

        {/* <div className="flex text-center gap-2 ">
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
        </div> */}

        <div onClick={onAddToCart} className="button">
          <button className="">Add To Cart</button>
        </div>
      </div>
    </Body>
  );
}

export default ProductChild;

const Body = styled.div`
/* display: flex;
flex-direction: column;
justify-items: center;
align-items: center; */
border-radius: 10px;
padding: 1rem 0;


.image{
      height: 300px;
      width: 300px;
      transition: .2s;
      margin-bottom: 0.5rem;

 
      img{
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }
  .flex_body{
    display: flex;
    flex-direction: column;
    width: 100%;
    color: white;


    .text{
margin:0 1rem ;

      p{
        font-size: 1rem;

        span{
          padding-right:0.4rem ;
          text-decoration: line-through;
          font-size: 0.7rem;

        }
      }
    }

    .button{
      display: flex;
      justify-content: center;
      margin: 0.4rem 1rem;
      opacity: 0;
      transition: .2s;
      button{
        background-color: #4e3333;
        width: 100%;
        height: 40px;
      }
    }

    

  }

  :hover {
    background-color: rgba(0, 0, 0, 0.105);
    border-radius: 10px;

  }
  :hover .button{
    opacity: 1;
  }
  :hover .image{
   transform: scale(1.06);
  }
`;
