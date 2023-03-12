import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { cartActions } from "../../redux/product";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function ProductChild({ item }) {
  const [qty, setQty] = useState(1);
  const disptch = useDispatch();

  // const decrease = () => {
  //   if (qty >= 0) {
  //     setQty((prev) => prev - 1);
  //   }
  // };
  // const increase = () => {
  //   setQty((prev) => prev + 1);
  // };

  const totalPrice = qty * item.price;

  const onAddToCart = () => {
    disptch(cartActions.addToCart({ ...item, qty, totalPrice }));

    setQty(1);
  };

  return (
    <Body key={item.id}>
      <Link to={`/products/${item._id}`}>
        <div className="image">
          <LazyLoadImage
            height={"100%"}
            src={item.image}
            placeholderSrc={item.image}
            effect="blur"
            className="img"
          />
        </div>
        <div className="flex_body">
          <div className="text">
            <h1 className="">{item.title}</h1>

            <p className=""> ${item.price}.00</p>
            <span> ${item.price}.00</span>
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
      </Link>
    </Body>
  );
}

export default ProductChild;

const Body = styled.div`
  border: 0.6px solid rgba(27, 27, 27, 0.1);
  /* transition: 0.3s ease-in-out; */
  width: 100%;
  overflow: hidden;
  .image {
    transition: 0.2s;
    margin-bottom: 0.5rem;
    padding: 10px;
    width: 100%;
    height: 300px;
    background-color: #f3f2f2;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    transition: all 0.3s;

    :hover {
      transform: scale(1.1);
    }
    @media screen and (max-width: 500px) {
      height: 200px;
    }
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      margin: 0 auto;
    }
  }
  .flex_body {
    display: flex;
    flex-direction: column;
    width: 100%;
    color: white;

    .text {
      padding: 5px 1rem;
      color: #010101;
      overflow: hidden;
      position: relative;
      z-index: 5;
      background-color: #fff;
      width: 100%;

      h1 {
        font-size: 0.9rem;
      }
      p {
        font-size: 0.7rem;
        font-weight: 700;

        color: #ed1d24;
      }

      span {
        padding-right: 0.4rem;
        text-decoration: line-through;
        font-size: 0.7rem;
        color: #a1d1d1;
      }
    }
  }
`;
