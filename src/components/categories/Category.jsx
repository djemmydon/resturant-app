import React, { useRef, useState } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Category() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    className: "body_swipe",
    responsive: [
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },

        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Body>
      <Slider {...settings}>
        {data.map((item) => (
          <div className="swipe">
            <div>
              <img src={item.image} alt="" />
            </div>
            <div>
              <p>{item.name}</p>
            </div>
          </div>
        ))}
      </Slider>
    </Body>
  );
}

export default Category;

const Body = styled.div`
  margin: 2rem auto;
  width: 1000px;
  /* display: flex; */
  align-items: center;

  /* .center{
    width:100%;
    display: flex;
    align-items: center;
    justify-content: center;
   
  } */
.body_swipe{
display: flex !important;
}
  .swipe {
    max-width: 100%;
    height: 200px;
    padding: 0 1rem;
    border:solid 1px wheat;
    border-radius: 10px;
    margin: 0 50px;
    img {
      background-color: red;
    }

    @media screen and (max-width: 600px) {
      width: 100%;
      height: 100%;
    }
    img {
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
`;

const data = [
  {
    name: "Fashion",
    image: "/img/06.png",
  },
  {
    name: "Fashion",
    image: "/img/06.png",
  },
  {
    name: "Fashion",
    image: "/img/06.png",
  },
  {
    name: "Watches",
    image: "/img/07.png",
  },
  {
    name: "Shoes",
    image: "/img/03.png",
  },
  {
    name: "Bags",
    image: "/img/08.png",
  },
  {
    name: "Head Phones",
    image: "/img/10.png",
  },
];
