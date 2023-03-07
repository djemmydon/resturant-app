import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../redux/product";
import { Link, useNavigate } from "react-router-dom";
import useTotal from "../redux/total";

function Cart() {
  const cart = useSelector((state) => state.cart.itemList);
  const navigate = useNavigate();

  return (
    <Body>
      <div className="link_header">
        <Link to="/">Home / </Link>
        <p>Carts</p>
      </div>
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
                <h1>Your Cart Is Empty</h1>
              </div>
            )}

            {cart.length == null && (
              <div className="text-center flex items-center justify-center w-full h-[200px]">
                <h1>Something Went Wrong 😒😒😒</h1>
              </div>
            )}

            <div className="product_body">
              {cart.map((item) => (
                <CartProduct key={item._id} item={item} />
              ))}
            </div>
          </div>

          <div className="button_back">
            <button onClick={() => navigate("/products")}>
              <span className="material-symbols-outlined">arrow_back_ios</span>
              {" Countinue Shopping"}
            </button>
          </div>
        </Template2>
        <Template1>
          <Shop cart={cart} />
        </Template1>
      </TemplateBody>
    </Body>
  );
}

export default Cart;

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
        <button onClick={() => navigate("/checkout")}>{" Proceed To Checkout"}</button>
      </div>
    </ShopBody>
  );
};
const CartProduct = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <CartBody>
      <div className="img">
        <img src={item.image} alt="" />
      </div>
      <div className="text">
        <h2>{item.title}</h2>
        <h3>${item.price.toLocaleString()}.00</h3>
      </div>
      <div className="control_form">
        <span
          className="material-symbols-outlined"
          onClick={() =>
            dispatch(cartActions.updateCart({ _id: item._id, type: "DEC" }))
          }
        >
          remove
        </span>

        <span>{item.qty}</span>
        <span
          className="material-symbols-outlined"
          onClick={() =>
            dispatch(cartActions.updateCart({ _id: item._id, type: "INC" }))
          }
        >
          add
        </span>
      </div>

      <div>
        <p>${item.totalPrice.toLocaleString()}.00</p>
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
  padding-top: 7rem;
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
    display: flex;
    align-items: center;
    button {
      width: 200px;
      height: 50px;
      font-size: 0.7rem;
      color: #fff;
      background-color: #ed1d24;
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
      border: 1px solid gray;
      cursor: pointer;
    }

    span:nth-child(2) {
      border: none;
    }
  }
`;
