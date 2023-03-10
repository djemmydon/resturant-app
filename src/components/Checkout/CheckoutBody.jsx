import styled from "styled-components";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import useTotal from "../../redux/total";
import nigeria from "./nigeriaApi";
import { useState } from "react";

function CheckoutBody() {
  const cart = useSelector((state) => state.cart.itemList);
  const [selectState, setSelectState] = useState("");

  console.log(selectState);
  return (
    <Body>
      <div className="link_header">
        <Link to="/">Home / </Link>
        <p>Checkout</p>
      </div>
      <TemplateBody>
        <Template2>
          <div>
            <div className="form">
              <form action="">
                <div className="info">
                  <p>Billing Information</p>
                </div>
                <div className="form_item">
                  <label htmlFor="First Name">First Name</label>
                  <input
                    placeholder="Enter Your First Name"
                    type="text"
                    name=""
                    id=""
                  />
                </div>

                <div className="form_item">
                  <label htmlFor="Last Name">Last Name</label>
                  <input
                    placeholder="Enter Your Last Name"
                    type="text"
                    name=""
                    id=""
                  />
                </div>

                <div className="form_item">
                  <label htmlFor="Address">Address</label>
                  <input
                    placeholder="Enter Your Address"
                    type="text"
                    name=""
                    id=""
                  />
                </div>

                <div className="form_item">
                  <label htmlFor="Address 2">Address 2</label>
                  <input
                    placeholder="Enter Your Address 2"
                    type="text"
                    name=""
                    id=""
                  />
                </div>

                <div className="form_item">
                  <label htmlFor="State">State</label>
                  <select
                    name=""
                    id=""
                    value={selectState}
                    onChange={(e) => setSelectState(e.target.value)}
                  >
                    <option>Select Your State</option>
                    {nigeria.map((item) => (
                      <option value={item.states.name}>
                        {item.states.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form_item">
                  <label htmlFor="City">Local Goverment</label>
                  <select name="" id="">
                    <option value="">Select Your Local Government</option>
                    {nigeria
                      .filter((x) => x.states.name === selectState)
                      .map((item) =>
                        item.states.locals.map((X) => <option>{X.name}</option>)
                      )}
                  </select>
                </div>

                <div className="form_item">
                  <label htmlFor="Zip/Poster Code">Zip/Poster Code</label>
                  <select name="" id="">
                    <option value="">Pay By your Card</option>
                    <option value="">Paystack</option>
                  </select>
                </div>

                <div className="form_item">
                  <label htmlFor="Phone">Phone</label>
                  <input
                    placeholder="Enter Your Phone Number"
                    type="text"
                    name=""
                    id=""
                  />
                </div>

                <div className="info">
                  <p>Payment Method</p>
                </div>

                <div className="form_item">
                  <label htmlFor="Phone">Phone</label>
                  <select name="" id="">
                    <option value="">Pay By your Card</option>
                    <option value="">Paystack</option>
                  </select>
                </div>
              </form>
            </div>
          </div>
        </Template2>
        <Template1>
          <Shop cart={cart} />
        </Template1>
      </TemplateBody>
    </Body>
  );
}

export default CheckoutBody;

const Shop = ({ cart }) => {
  const { totalPrice, totalQty } = useTotal();
  const navigate = useNavigate();

  const overall = totalPrice + 7;
  return (
    <ShopBody>
      <div className="header">
        <h2>Shop</h2>
      </div>

      <div className="shop_body">
        <div className="shop_item">
          <p>{totalQty} Item(s)</p>
          <span>${totalPrice.toLocaleString()}.00</span>
        </div>
        <div className="shop_item">
          <p>Shipping</p>
          <span>$7.00</span>
        </div>
        <div className="shop_item">
          <p>Total</p>
          <span>${overall.toLocaleString()}.00</span>
        </div>
      </div>
      <div className="button_back">
        <button onClick={() => navigate("/checkout")}>
          {" Proceed To Checkout"}
        </button>
      </div>
    </ShopBody>
  );
};

const Body = styled.div`
  height: 100%;
  width: 100%;
  padding-top: 4rem;
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
  border: 1px solid rgba(192, 201, 210, 0.5);
  @media screen and (max-width: 900px) {
    margin: 0px;
  }
  @media screen and (max-width: 600px) {
    width: 100%;
  }
  @media screen and (max-width: 400px) {
  }

  .info {
    p {
      font-size: 1.4rem;
      font-weight: 600;
    }
  }
  .form {
    display: flex;
    width: 100%;
    margin: 2rem 1rem;

    @media screen and (max-width: 800px) {
    }

    form {
      display: flex;
      flex-direction: column;
      margin: 0 2rem;
      gap: 2rem;

      @media screen and (max-width: 800px) {
        flex-direction: column;
        justify-content: center;
        margin: 0 0.5rem;
      }

      .form_item {
        display: flex;
        justify-content: space-around;

        @media screen and (max-width: 800px) {
          flex-direction: column;
          justify-content: center;
        }

        label {
          width: 200px;
          font-family: "Montserrat", sans-serif;
          font-size: 0.8rem;
        }
        input,
        select {
          width: 500px;
          height: 40px;
          border: 2px solid rgba(192, 201, 210, 0.5);
          font-family: "Montserrat", sans-serif;
          outline: none;
          padding: 1px 5px;
          font-size: 0.8rem;

          @media screen and (max-width: 800px) {
            flex-direction: column;
            justify-content: center;
            width: 400px;
          }
          @media screen and (max-width: 500px) {
            flex-direction: column;
            justify-content: center;
            width: 300px;
          }
          @media screen and (max-width: 400px) {
            flex-direction: column;
            justify-content: center;
            width: 250px;
          }
        }
      }
    }
  }
`;

const ShopBody = styled.div`
  border: 1px solid rgba(192, 201, 210, 0.5);

  .header {
    border-bottom: 1px solid rgba(192, 201, 210, 0.5);
    padding: 5px 10px;
  }

  .shop_body {
    padding: 10px 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    .shop_item {
      display: flex;
      justify-content: space-between;

      p {
        font-weight: 400;
      }
      span {
        font-weight: 600;
        color: grey;
      }
    }
  }

  .button_back {
    margin: 10px;
    display: flex;
    align-items: center;
    button {
      width: 200px;
      height: 50px;
      font-size: 0.7rem;
      color: #fff;
      background-color: #000;
      border-color: #ed1d24;
      text-transform: uppercase;
      transition: 0.3s;

      display: flex;
      align-items: center;
      justify-content: center;

      span {
        font-size: 0.7rem;
      }
      :hover {
        background-color: #ed1d24;
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
    display: flex;
    gap: 1rem;

    span {
      border: 1px solid rgba(192, 201, 210, 0.5);
      cursor: pointer;
    }

    span:nth-child(2) {
      border: none;
    }
  }
`;
