import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Products from "../components/Products/Products";

function Product() {
  const [fetch, setFetch] = useState([]);

  const options = {
    method: "GET",
    url: "https://commerce-backend-rho.vercel.app/api/v1/product",
  };
  useEffect(() => {
    const fetchApi = async () => {
      await axios.request(options).then((res) => {
        setFetch(res.data);
      });
    };

    fetchApi();
  });
  return (
    <Body>
      <div className="link_header">
        <Link to="/">Home  /</Link>
        <p>Products </p>
      </div>
      <TemplateBody>
        <Template1>
          <Shop />
        </Template1>
        <Template2>
          <div className="header">
            <h2>Shop</h2>

            <div className="header_flex">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
              <img src="/img/01.png" alt="" />
            </div>
          </div>

          {/*  Sending property  to it child*/}
          <div>
            {fetch.length === 0 && (
              <div className="text-center flex items-center justify-center w-full h-[200px]">
                <h1>Loading 😊😊</h1>
              </div>
            )}

            {fetch.length == null && (
              <div className="text-center flex items-center justify-center w-full h-[200px]">
                <h1>Something Went Wrong 😒😒😒</h1>
              </div>
            )}
            <Products fetch={fetch} />
          </div>
        </Template2>
      </TemplateBody>
    </Body>
  );
}

export default Product;

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

  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`;
const Template1 = styled.div`
  width: 380px;
  height: 100%;
  margin: 10px;
`;
const Template2 = styled.div`
  width: 100%;
  height: 100%;
  margin: 10px;
  @media screen and (max-width: 900px) {
    margin: 0px;
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
