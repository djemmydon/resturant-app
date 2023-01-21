import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import styled, { keyframes } from "styled-components";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
function Main() {
  return (
    <Body>
      <Swiper
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Autoplay,Navigation, Pagination, Mousewheel, Keyboard]}
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
`

const Body = styled.div`
  height: 100vh;
  max-width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 10rem;
  

  @media screen and (max-width: 700px) {
      
    height: 100%;


          
        }
  .my_swipe {
    width:1000px!important;

    height: 100%;
    display: flex;
    justify-content: center !important;
    align-items: center !important;

    .swiper-pagination-bullet{
      background-color: #ffffff;
      transition: 0.5s;

    }

    .swiper-pagination-bullet-active{
      width: 40px;
      height: 5px;
      border-radius: 1px;
    }

    .swiper-slide-active {
      img{
        animation: ${rotate} 4s linear infinite;
      }
    }
  }
  .swipBody {
    width: 100% !important;
    height: 100%;
    display: flex;
    justify-content: center;
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
      width: 100%;
      height: 100%;
      align-items: center !important;
      justify-items: space-between !important;
      margin: 0;
      @media screen and (max-width: 700px) {
        flex-direction: column;
      }

      @media screen and (max-width: 700px) {
        justify-content: center !important;


          
        }
      .text_side {
        width: 500px;
        display: block;
        @media screen and (max-width: 1200px) {
          width: 400px;
        }

        @media screen and (max-width: 1000px) {
     display: none;

          
        }
        p {
          font-size: 1.5rem;
          font-weight: 600;
          color: white;
          margin: 0;
          padding: 0;
        }
        h2 {
          font-size: 2.5rem;
          font-weight: 600;
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
        height: 500px;
        @media screen and (max-width: 1200px) {
          height: 300px;
        }
        @media screen and (max-width: 1000px) {
          height: 600px;
          
        }
        @media screen and (max-width: 600px) {
          height: 400px;
          
        }
        img {
          height: 100%;
        }
      }
    }
  }
`;
