
import { Link } from "react-router-dom";
import styled from "styled-components";
import Products from "../components/Products/Products";
import { productsApi } from "../redux/apiSlice";
import { FetchType } from "../typing";




function Product() {

  const { data: product, isLoading, error: isError } = productsApi.useGetAllProductsQuery<FetchType>();


  return (
    <Body>
      <div className="link_header">
        <Link to="/">Home /</Link>
        <p>Products </p>
      </div>
      <TemplateBody>
        <Template1>
          <Shop />
        </Template1>
        <Template2>
          <div className="header"></div>

          {/*  Sending property  to it child*/}
          <div>
            <Products fetch={product} isLoading={isLoading} isError={isError} />
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
          <span className="material-symbols-outlined">chevron_right</span>
        </div>
        <div className="shop_item">
          Cameta & Photo
          <span className="material-symbols-outlined">chevron_right</span>
        </div>
        <div className="shop_item">
          Audio & Home
          <span className="material-symbols-outlined">chevron_right</span>
        </div>
        <div className="shop_item">
          SmartPhone & Ipad
          <span className="material-symbols-outlined">chevron_right</span>
        </div>
      </div>
    </ShopBody>
  );
};

const Body = styled.div`
  height: 100%;
  width: 100%;
  padding-top: 3rem;
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
  padding: 1rem;
`;
const Template2 = styled.div`
  width: 100%;
  height: 100%;
  margin: 10px;
  @media screen and (max-width: 900px) {
    margin: 0px;
    padding: 0 1rem;
  }

  .header {
    border: 1px solid rgba(192, 201, 210, 0.5);
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
      color: rgba(192, 201, 210, 0.5);
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
