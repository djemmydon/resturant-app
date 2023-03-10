import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  EffectFade,
} from "swiper";
import styled, { keyframes } from "styled-components";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function Main() {
  return (
    <Body>
      <Swiper
        slidesPerView={1}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        keyboard={true}
        modules={[
          Autoplay,
          Navigation,
          Pagination,
          Mousewheel,
          Keyboard,
          EffectFade,
        ]}
        className="my_swipe"
      >
        <SwiperSlide className="swipBody">
          <div className="flex_item">
            <div className="text_side">
              <p>Complete Your Look !</p>
              <h2>TNew Men's Accessories</h2>
              <span>Sneakers, Keds, Sweatshirts, Hoodies & much more...</span>
              <div className="button">
                <button>{`Shop Now >`}</button>
              </div>
            </div>
            <div className="img">
              <img src="/img/03.png" alt="" />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swipBody">
          <div className="flex_item">
            <div className="text_side">
              <p>Complete Your Look !</p>
              <h2>TNew Men's Accessories</h2>
              <span>Sneakers, Keds, Sweatshirts, Hoodies & much more...</span>
              <div className="button">
                <button>{`Shop Now >`}</button>
              </div>
            </div>
            <div className="img">
              <img src="/img/04.png" alt="" />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swipBody">
          <div className="flex_item">
            <div className="text_side">
              <p>Complete Your Look !</p>
              <h2>TNew Men's Accessories</h2>
              <span>Sneakers, Keds, Sweatshirts, Hoodies & much more...</span>
              <div className="button">
                <button>{`Shop Now >`}</button>
              </div>
            </div>
            <div className="img">
              <img src="/img/05.png" alt="" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </Body>
  );
}

export default Main;

const rotate = keyframes`
from{
  transform: scale(0.9);

  @media screen and (max-width: 700px) {
  transform: scale(1);
    
  }
}
  to {
    transform: scale(1);

    @media screen and (max-width: 700px) {
  transform: scale(1.4);
    
  }
  }
`;

const Body = styled.div`
  height: 100vh;
  max-width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 10rem;
  background-color: rgb(27, 27, 27);

  @media screen and (max-width: 700px) {
    height: 100%;
  }
  .my_swipe {
    width: 100% !important;

    height: 100%;
    display: flex;
    justify-content: center !important;
    align-items: center !important;

    .swiper-pagination-bullet {
      background-color: #ffffff;
      transition: 0.5s;
    }

    .swiper-pagination-bullet-active {
      width: 40px;
      height: 5px;
      border-radius: 1px;
    }
    .swiper-slide {
      opacity: 0;
    }
    .swiper-slide-active {
      opacity: 1;
      img {
        animation: ${rotate} 4s linear infinite;
      }
    }
  }

  .swiper-button-next,
  .swiper-button-prev {
    padding: 10px;
    width: 50px;
    height: 50px;
    background-color: white;
    border-radius: 100px;
    border: 10px solid #111;
    transition: 0.5s;


    &:hover {
      border: 10px solid white;
    }
  }
  .swiper-button-next:after,
  .swiper-button-prev:after {
    color: #000000 !important;
    font-size: 25px;

    text-align: center;

    /* font-family: 'Courier New', Courier, monospace!important; */
  }
  .swipBody {
    display: flex;
    justify-content: center !important;
    align-items: center;

    @media screen and (max-width: 1200px) {
      width: 100% !important;
      padding: 0 1rem;
    }
    @media screen and (max-width: 1000px) {
      width: 100% !important;
    }

    .flex_item {
      display: flex;
      align-items: center !important;
      justify-items: center !important;
      margin: 0;
      @media screen and (max-width: 700px) {
        flex-direction: column;
      }

      .text_side {
        width: 700px;
        display: block;
        @media screen and (max-width: 1200px) {
          width: 400px;
        }

        @media screen and (max-width: 1000px) {
          display: none;
        }
        p {
          font-size: 1rem;
          font-weight: 600;
          color: white;
          margin: 0;
          padding: 0;
        }
        h2 {
          font-size: 6.5rem;
          font-weight: 600;
          line-height: 100px;
          color: white;
          margin: 0;
          padding: 0;
        }
        span {
          font-size: 0.8rem;
          font-weight: 600;
          color: white;
          margin: 0;
          padding: 0;
        }

        .button {
          margin-top: 1rem;
          button {
            color: white;
            background-color: #353232;
            width: 140px;
            height: 35px;
            border: 2px solid #353232;
            transition: 0.5s;

            :hover {
              background: none;
            }
          }
        }
      }
      .img {
        height: 600px;
        @media screen and (max-width: 1200px) {
          height: 300px;
        }
        @media screen and (max-width: 1000px) {
          height: 600px;
        }
        @media screen and (max-width: 600px) {
          height: 400px;
          width: 100%;
        }
        @media screen and (max-width: 400px) {
          height: 500px;
          width:100%;
        }
        img {
          height: 100%;
          width:100%;
          object-fit:cover;

        }
      }
    }
  }
`;
