import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";
import CategoryChild from './CategoryChild'
import styled from "styled-components";

function Category() {
  return (
      <Body>
              <Swiper
        slidesPerView={4}
        spaceBetween={20}
        pagination={{
            clickable: true,
            
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
    {data.map((item) => (
     <SwiperSlide className="swipe">
     <div>
       <img src={item.image} alt="" />
     </div>
     <div>
       <p>{item.name}</p>
     </div>
   </SwiperSlide>

    ))}
          
      </Swiper>    
    
  </Body>
  )
}

export default Category

const Body = styled.div`
margin: 2rem 0;
display: flex;
justify-content: center;
align-items: center;
width: 100%;

.swipe{
    width: 300px;
    height: 200px;
    display: flex;
    flex-direction: column;
    border: 1px solid gray;
    align-items: center;
    margin: 1rem;

    @media screen and (max-width: 600px) {
        width: 100%;
    height: 100%; 
    }
    img{
        height: 150px;
        object-fit: cover;

        @media screen and (max-width: 600px) {
            height: 120px;
    
    }
    }
}

/* @media screen and (max-width:700px) {
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  
}
@media screen and (max-width:500px) {
grid-template-columns: repeat(auto-fit, minmax(1r, 1fr));
  
} */

`

const data = [
    {
        name: "Fashion",
        image: "/img/06.png"
    },
    {
        name: "Watches",
        image: "/img/07.png"
    },
    {
        name: "Shoes",
        image: "/img/03.png"
    },
    {
        name: "Bags",
        image: "/img/08.png"
    },
    {
        name: "Head Phones",
        image: "/img/10.png"
    },
]