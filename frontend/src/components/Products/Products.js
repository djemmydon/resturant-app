import React from 'react'
import ProductChild from './ProductChild'
import Shaw from "../../assets/shaw.png";
import Shaws from "../../assets/kebab_PNG50.png";

function Products() {
  return (
    <div className='flex justify-center gap-5 flex-wrap'>
      {foods.map((item) => (
        <ProductChild item={item}  />

      ))}
      
    </div>
  )
}

export default Products



const foods = [
  {
    name: "Lamb Shawarma",
    price: "200",
    id: "4563",
    image:"/img/Shawarma2.jpg",
  },

  {
    name: "Pizza",
    price: "350",
    id: "463",
    image:"/img/pizza.jpg",

  },

  
  {
    name: "Chicken Shawarma",
    price: "200",
    id: "4563",
    image:"/img/Shawarma.jpg",
  },
  {
    name: "Chicken and Chips",
    price: "200",
    id: "453",
    image:"/img/chi.jpg",

  },
]