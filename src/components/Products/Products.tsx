import ProductChild from "./ProductChild";
import styled from "styled-components";
import Loading from "../Loading";
import { fetchType, ProductType } from "../../typing"


function Products({ fetch, isLoading, isError }: fetchType) {

  console.log(fetch)

  return (
    <MainBody>
      {isLoading && (
        <div className="loader">
          <Loading />
        </div>
      )}

      {isError && (
        <div className="loader">
          <h1>Rjnksnkscwjsnnwcd</h1>
        </div>
      )}

      {fetch && (
        <Body>
          {fetch?.products?.map((item) => (
            <ProductChild key={item._id} item={item} />
          ))}
        </Body>
      )}
    </MainBody>
  );
}

export default Products;

const MainBody = styled.div`
  width: 100%;
  height: 100%;

  .loader {
    width: 100%;
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;

    .loaderitem {
    }
  }
`;
const Body = styled.div`
  padding: 3rem 3rem;
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  align-content: center;
  justify-items: center;
  gap: 0.5rem;

  @media screen and (max-width: 700px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
  @media screen and (max-width: 500px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    padding: 3rem 1rem;
  }
`;
