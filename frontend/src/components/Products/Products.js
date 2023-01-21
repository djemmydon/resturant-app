import React from 'react'
import ProductChild from './ProductChild'
import Shaw from "../../assets/shaw.png";
import Shaws from "../../assets/kebab_PNG50.png";
import styled from "styled-components";


function Products() {
  return (
    <Body>
      {foods.map((item) => (
        <ProductChild item={item}  />

      ))}
      
    </Body>
  )
}

export default Products

const Body = styled.div`
margin: 3rem 0;
display:grid;
grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
align-content:center;
justify-items: center;
gap: 1rem;

@media screen and (max-width:700px) {
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  
}
@media screen and (max-width:500px) {
grid-template-columns: repeat(auto-fit, minmax(1r, 1fr));
  
}

`



const foods = [
  {
    name: "T Shirt",
    price: "200",
    id: "4563",
    image:"/img/01.png",
  },

  {
    name: "Suit And Tie",
    price: "350",
    id: "463",
    image:"/img/02.png",


  },

  
  {
    name: "Sport Canvas",
    price: "200",
    id: "4563",
    image:"/img/03.png",

  },
  {
    name: "Coorperate Wear",
    price: "200",
    id: "453",
    image:"/img/04.png",
    

  },
]