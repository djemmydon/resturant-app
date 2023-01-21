import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../redux/product";

function Cart() {
  const [booking, setBooking] = useState([]);

  const cart = useSelector((state) => state.cart.itemList);
  const total = useSelector((state) => state.cart.allTotalPrice);

  const disptch = useDispatch();
  return (
    <Body>
      <h1>Carts</h1>

      <div className="t_body">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            <>
              {cart.map((item) => (
                <tr>
                  <td>
                    <h2 className=" text-2xl">{item.name}</h2>
                    <p>Flour, Pastries and Sugar</p>
                  </td>
                  <td className=" text-xl">{item.price.toLocaleString()}.00</td>
                  <td>
                    {" "}
                    <div className="flex text-center gap-2 ">
                      <div className=" w-4 h-4 pb-8 rounded  bg-orangee text-white flex justify-center content-center cursor-pointer ">
                        <span className="text-2xl w-full pb-6  cursor-pointer  ">
                          -
                        </span>
                      </div>
                      <div className=" w-6  bg-white flex justify-center content-center cursor-pointer">
                        <span className="text-2xl w-full h-full cursor-pointer ">
                          {item.qty}
                        </span>
                      </div> 
                      <div
                        className=" w-4 h-4 pb-8 rounded text-white bg-orangee flex justify-center content-center cursor-pointer"
                    onClick={() => disptch(cartActions.increase({qty:item.qty}))}
                      >
                        <span className="   text-2xl w-full h-full cursor-pointer ">
                          +
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className=" text-xl">
                    {item.price.toLocaleString(item.id)}.00
                  </td>

                  <td
                        onClick={() => disptch(cartActions.removeCart({id:item.id}))}
                  
                      >
                    <span class="material-symbols-outlined">delete</span>
                  </td>
                </tr>
              ))}
            </>
          </tbody>
        </table>
      </div>

      <div></div>
    </Body>
  );
}

export default Cart;

const Body = styled.div`
  /* display: flex; */
  /* flex-direction: column; */
  align-items: center;
  justify-content: center;
  /* flex-direction: column; */
  height: 100vh;
  width: 700px;
  font-family: "Montserrat", sans-serif;
  overflow: hidden;
  padding-top: 8rem;
  margin: 0 auto;
  h1 {
    font-size: 1.4rem;
    color: #002d80;
    position: relative;
    margin: 2rem auto;

    display: flex;
    justify-content:center;

    &::before {
      content: "";
      position: absolute;
      width: 220px;
      height: 2px;
      background: #f14105;
      top: 35px;
    }
  }
  .t_body {
    width: 100%;
    overflow-x: scroll;

    table {
      width: 100%;
      user-select: none;
      font-size: 0.8rem;
      border-collapse: collapse;
      font-family: "Montserrat", sans-serif;

      overflow-x: scroll;

      thead {
        /* background-color: red; */
        color: black;
        border-radius: 10px;
      }

      thead tr th {
        padding: 10px 13px;
        font-weight: 300;
        white-space: nowrap;
        font-family: "Montserrat", sans-serif;
        font-weight: 600;

        @media screen and (max-width: 500px) {
          padding: 3px 3px;
          font-size: 0.6rem;
        }
      }
    }
    tbody {
      border-radius: 10px;
    }

    tbody tr td {
      padding: 10px 10px;
      font-weight: 300;
      white-space: nowrap;
      background-color: white;
      border-bottom: 3px solid grey;
      transition: 0.6s;
      font-family: "Montserrat", sans-serif;
      font-weight: 600;
      @media screen and (max-width: 500px) {
        padding: 5px 5px;
        font-size: 0.6rem;
      }
    }
    .checked {
      text-decoration: line-through;
      font-weight: 600;
    }
  }

  .loading {
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
