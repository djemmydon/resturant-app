import ProductChild from "./ProductChild";
import styled from "styled-components";

function Products({ fetch }) {
  return (
    <Body>
      {fetch?.map((item) => (
        <ProductChild key={item._id} item={item} />
      ))}
    </Body>
  );
}

export default Products;

const Body = styled.div`
  padding: 3rem 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  align-content: center;
  justify-items: center;
  gap: 0.5rem;

  @media screen and (max-width: 700px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
  @media screen and (max-width: 500px) {
    grid-template-columns: repeat(auto-fit, minmax(1r, 1fr));
  }
`;
