import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

function ProductDatails() {
  const { id } = useParams();

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      await axios
        .get(`http://localhost:3001/api/v1/product/${id}`)
        .then((res) => {
          setData(res.data);
        });
    };

    fetch();
  });

  return (
    <Body>
      <Flex>
        <BoxImage>
          <img src={data.image} alt="" />
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
            <input type="number" defaultValue="0" />

            <button>Add To Cart</button>
          </BoxCart>

          <hr />
        </BoxText>
      </Flex>
    </Body>
  );
}

export default ProductDatails;

const Body = styled.div`
  padding-top: 10rem;
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
    height: 400px;
    width: 400px;
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

  @media screen and (max-width: 500px) {
    width: 300px;
    height: 300px;
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
