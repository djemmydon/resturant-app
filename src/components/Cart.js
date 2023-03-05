import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../redux/product";
import Products from "./Products/Products";
import { useNavigate } from "react-router-dom";


function Cart() {
  const cart = useSelector((state) => state.cart.itemList);
  const total = useSelector((state) => state.cart.allTotalPrice);
  const navigate = useNavigate()

  const disptch = useDispatch();
  return (
    <Body>
      <TemplateBody>
        <Template2>
          <div className="header">
            <h2>Shop</h2>

            <div className="header_flex"></div>
          </div>

          {/*  Sending property  to it child*/}
          <div>
            {cart.length === 0 && (
              <div className="text-center flex items-center justify-center w-full h-[200px]">
                <h1>Loading 😊😊</h1>
              </div>
            )}

            {cart.length == null && (
              <div className="text-center flex items-center justify-center w-full h-[200px]">
                <h1>Something Went Wrong 😒😒😒</h1>
              </div>
            )}

            <div className="product_body">
              {cart.map((item) => (
                <CartProduct item={item} />
              ))}
            </div>
          </div>

          <div className="button_back">
            <button
            onClick={() => navigate("/products")}
            >{"<  Countinue Shopping"}</button>
          </div>
        </Template2>
        <Template1>
          <Shop />
        </Template1>
      </TemplateBody>
    </Body>
  );
}

export default Cart;

const Shop = () => {
  return (
    <ShopBody>
      <div className="header">
        <h2>Shop</h2>
      </div>

      <div className="shop_body">
        <div className="shop_item">
          Computer & Laptop
          <span class="material-symbols-outlined">chevron_right</span>
          {/* <div className="child">
                      <div>
                          <p>Hp Laptop</p>
                      </div>
                      <div>
                          <p>Lenovo Laptop</p>
                      </div>
                      <div>
                          <p>Dell Monitors</p>
                      </div>
                      <div>
                          <p>Mac Computer</p>
                      </div>
              </div> */}
        </div>
        <div className="shop_item">
          Cameta & Photo
          <span class="material-symbols-outlined">chevron_right</span>
        </div>
        <div className="shop_item">
          Audio & Home
          <span class="material-symbols-outlined">chevron_right</span>
        </div>
        <div className="shop_item">
          SmartPhone & Ipad
          <span class="material-symbols-outlined">chevron_right</span>
        </div>
      </div>
    </ShopBody>
  );
};
const CartProduct = ({ item }) => {
  const [qty, setQty] = useState(item.qty);

  return (
    <CartBody>
      <div className="img">
        <img src={item.image} alt="" />
      </div>
      <div className="text">
        <h2>{item.title}</h2>
        <h3>{item.price}</h3>
      </div>
      <div className="control_form">
        <input
          type="number"
          value={qty}
          onChange={(e) => setQty(e.target.value)}
        />
      </div>

      <div>
        <p>{item.totalPrice}</p>
      </div>

      <div>
        <span class="material-symbols-outlined">delete</span>
      </div>
    </CartBody>
  );
};

const Body = styled.div`
  height: 100%;
  width: 100%;
  padding-top: 10rem;
`;
const TemplateBody = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  gap: 20px;
  padding: 1rem;

  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`;
const Template1 = styled.div`
  width: 700px;
  height: 100%;
  margin: 10px;

  @media screen and (max-width: 900px) {
    margin: 0px;
  }
  @media screen and (max-width: 600px) {
    width: 100%;
  }
  @media screen and (max-width: 400px) {
  }
`;
const Template2 = styled.div`
  width: 100%;
  height: 100%;
  margin: 10px;
  @media screen and (max-width: 900px) {
    margin: 0px;
  }
  @media screen and (max-width: 600px) {
    width: 100%;
  }
  @media screen and (max-width: 400px) {
  }

  .header {
    border: 1px solid gray;
    h2 {
      margin-left: 10px;
      padding: 0.5rem;
      border-bottom: 2px solid red;
      width: min-content;
    }
  }

  .button_back {
    margin-top: 10px;
    button {
      width: 200px;
      height: 50px;
      font-size: .7rem;
      color: #fff;
      background-color: #ed1d24;
      border-color: #ed1d24;
      text-transform: uppercase;
      transition: .3s;

      :hover{
      background-color: #ed1d50;

      }
    }
  }
  .header_flex {
    display: flex;
    align-content: center;
    padding: 10px;

    img {
      height: 130px;

      @media screen and (max-width: 500px) {
        display: none;
      }
    }

    p {
      font-weight: 600;
      color: gray;
    }
  }

  .product_body {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 25px 0;
    border-bottom: 0.5px solid #000;
    border-left: 0.5px solid #000;
    border-right: 0.5px solid #000;
  }
`;

const ShopBody = styled.div`
  border: 1px solid gray;

  .header {
    border-bottom: 1px solid gray;
    padding: 5px 10px;
  }

  .shop_body {
    padding: 10px 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    .shop_item {
      transition: 0.4s;
      cursor: pointer;
      position: relative;
      display: flex;
      span {
        opacity: 0;
        transition: 0.4s;
      }

      :hover {
        padding-left: 10px;
        color: red;
      }

      :hover span {
        opacity: 1;
      }

      .child {
        display: flex;
        flex-direction: column;
        gap: 10px;
        top: 0;
      }
    }
  }
`;

const CartBody = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  .img {
    height: 120px;
    background-color: #d8d8d8;

    @media screen and (max-width: 600px) {
      height: 60px;
    }
    @media screen and (max-width: 400px) {
    }
    img {
      height: 100%;
    }
  }

  .text {
    h2 {
      font-size: 0.8rem;
    }
    h3 {
      color: #ed1d24;
      font-size: 1.2rem;
      font-weight: 700;
    }

    @media screen and (max-width: 600px) {
      h2 {
        font-size: 0.8rem;
      }
      h3 {
        font-size: 1rem;
      }
    }
    @media screen and (max-width: 400px) {
    }
  }

  .control_form {
    input {
      border: 1px solid #101010;
      width: 100px;
      height: 40px;
      font-size: 1rem;
      padding: 10px;

      @media screen and (max-width: 600px) {
        width: 80px;
        height: 30px;
      }
      @media screen and (max-width: 400px) {
      }
    }
  }
`;
