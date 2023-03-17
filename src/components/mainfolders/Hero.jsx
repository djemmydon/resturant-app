import styled from "styled-components";

const Hero = () => {
  return (
    <Body>
      <BodyFlex>
        <Template1></Template1>

        <Template2>
          <Template2Children></Template2Children>
          <Template2Children></Template2Children>
          <Template2Children></Template2Children>
          <Template2Children></Template2Children>
        </Template2>
      </BodyFlex>
    </Body>
  );
};
export default Hero;

const Body = styled.div`
  height: 600px;
  margin: 4rem 5rem;
  box-sizing: border-box;

  @media screen and (max-width: 900px) {
    height: 1000px;
  }
`;
const BodyFlex = styled.div`
  display: flex;
  gap: 1rem;
  height: 100%;

  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`;
const Template1 = styled.div`
  height: 100%;
  width: 100%;
  background: url(/img/category-1.jpg.webp);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
const Template2 = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;

  @media screen and (max-width: 1100px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }

  @media screen and (max-width: 400px) {
    grid-template-columns: repeat(auto-fit, minmax(1fr, 1fr));
  }
`;
const Template2Children = styled.div`
  height: 100%;
  width: 100%;
  @media screen and (max-width: 900px) {
  }
  :nth-child(1) {
    background: url(/img/category-2.jpg.webp);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
  :nth-child(2) {
    background: url(/img/category-3.jpg.webp);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
  :nth-child(3) {
    background: url(/img/category-4.jpg.webp);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
  :nth-child(4) {
    background: url(/img/category-5.jpg.webp);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
`;
