import ProductChild from "./ProductChild";
import styled from "styled-components";
import ScaleLoader from "react-spinners/ScaleLoader";

function Products({ fetch }) {
  return (
    <MainBody>
      {fetch.length === 0 ? (
        <div className="loader">
          <div className="loaderitem">
            <ScaleLoader color="#ed1d24" size={30} />
          </div>
        </div>
      ) : (
        <Body>
          {fetch?.map((item) => (
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
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
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
