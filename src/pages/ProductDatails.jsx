import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import Products from "../components/Products/Products";
import { cartActions } from "../redux/product";

function ProductDatails() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [product, setProduct] = useState([]);
  const [qty, setQty] = useState(1);
  const disptch = useDispatch();

  const onAddToCart = (data) => {
    const totalPrice = qty * data.price;

    disptch(cartActions.addToCart({ ...data, qty, totalPrice }));

    setQty(1);
  };

  useEffect(() => {
    const fetch = async () => {
      await axios
        .get(`https://commerce-backend-rho.vercel.app/api/v1/product/${id}`, {
          headers: {
            "Content-Type": "application/json, text/plain",
          },
        })
        .then((res) => {
          setData(res.data);
        });
    };
    fetch();
  });

  useEffect(() => {
    const peoplesLike = async () => {
      await axios
        .get(`https://commerce-backend-rho.vercel.app/api/v1/product`)
        .then((res) => {
          setProduct(res.data);
        });
    };
    peoplesLike();
  });

  return (
    <Body>
      <div className="link_header">
        <Link to="/">Home / </Link>
        <Link to="/products">Products / </Link>
        <p>{data.title}</p>
      </div>
      <Flex>
        <BoxImage>
          <LazyLoadImage
            src={data.image}
            placeholderSrc={data.image}
            effect="blur"
          />
        </BoxImage>
        <BoxText>
          <div className="head">
            <h2>{data.title}</h2>
            <h4>${data.price?.toLocaleString()}</h4>
          </div>
          <hr />

          <div className="decrip">
            <p>{data.description}</p>
          </div>

          <hr />

          <BoxCart>
            <input
              type="number"
              value={qty}
              onChange={(e) => setQty(e.target.value)}
            />

            <button onClick={() => onAddToCart(data)}>Add To Cart</button>
          </BoxCart>

          <hr />
        </BoxText>
      </Flex>

      <div className="text-center mt-14">
        <h2>People Also Like</h2>
      </div>
      <div>
        <Products fetch={product} />
      </div>
    </Body>
  );
}

export default ProductDatails;

const Body = styled.div`
  padding-top: 3rem;
  max-width: 100%;
  height: 100%;
`;
const Flex = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;

  @media screen and (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;
const BoxImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 500px;
  background-color: #d8d8d8;
  height: 500px;

  @media screen and (max-width: 1200px) {
    width: 400px;
    height: 400px;
  }

  @media screen and (max-width: 900px) {
    width: 100%;
    height: 100%;
  }
  img {
    /* height: 100%; */
  }
`;

const BoxText = styled.div`
  width: 500px;

  .head {
    h2 {
      font-size: 2.3rem;
    }
    h4 {
      font-size: 2rem;
      color: #ed1d24;
      font-size: 700;
    }
  }

  .decrip {
    margin: 1rem 0;

    p {
      font-size: 0.8rem;
    }
  }

  @media screen and (max-width: 1200px) {
    height: 400px;
    width: 400px;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
    padding: 0 15.5px;
    height: 100%;
  }
`;

const BoxCart = styled.div`
  margin: 30px 0;
  input {
    border: 2px solid #101010;
    width: 50px;
    height: 40px;
    font-size: 1rem;
    text-align: center;
  }

  button {
    margin-left: 1rem;
    width: 150px;
    background-color: #101010;
    border: 2px solid #101010;
    transition: 0.3s;
    height: 40px;
    color: white;

    &:hover {
      background: none;
      color: #010101;
    }
  }
`;
