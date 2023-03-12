import React from "react";
import styled from "styled-components";

function Banner() {
  return (
    <Body>
      <div className="flex_body">
        <div className="banner_image">
          <img src="/img/03.png" alt="Banner View" />
        </div>
        <div className="banner_text">
          <h2>Product Name</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
      </div>
    </Body>
  );
}

export default Banner;

const Body = styled.div`
  color: #fff;
  background-color: #ed1d24;
  border-color: #ed1d24;
  padding: 1rem 3rem;
  margin: 1rem 5rem;
  @media screen and (max-width: 600px) {
    margin: 0;
    padding: 1rem 1rem;
  }
  .flex_body {
    display: flex;
    justify-content: center;
    gap: 4rem;

    @media screen and (max-width: 800px) {
      gap: 3rem;
      flex-direction: column-reverse;
    }
    @media screen and (max-width: 400px) {
    }
    .banner_text {
      width: 500px;
      margin-top: 3rem;

      h2 {
        font-size: 4rem;
      }

      p {
        font-size: 0.8rem;
      }

      @media screen and (max-width: 600px) {
        width: 100%;
        h2 {
          font-size: 2rem;
        }

        p {
          font-size: 0.8rem;
        }
      }
      @media screen and (max-width: 400px) {
      }
    }

    .banner_image {
      height: 400px;
      margin: 0 auto;

      @media screen and (max-width: 600px) {
        height: 300px;
      }
      @media screen and (max-width: 400px) {
        height: 200px;
      }

      img {
        height: 100%;
      }
    }
  }
`;
