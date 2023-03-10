import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Review() {
  const settings = {
    infinite: true,
    speed: 200,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoPlay: true,
    initialSlide: 0,
    className: "body_swipe",
    responsive: [
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <Body>
      <Slider {...settings}>
        {data.map((item) => (
          <div className="swipe shadow-lg">
            <div className="column">
              <h2>"</h2>
            </div>
            <div className="text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute
              </p>
            </div>

            <div className="user">
              <img src="/img/testimonials1.jpg" alt="" />
              <p>John Doe</p>
            </div>
          </div>
        ))}
      </Slider>
    </Body>
  );
}

export default Review;

const Body = styled.div`
  margin: 6rem 2rem;
  max-width: 100%;
  align-items: center;

  @media screen and (max-width: 400px) {
    margin: 6rem 1rem;
  }

  .slick-next {
    right: 0;
  }
  .slick-prev {
    left: 0;
  }

  .body_swipe {
  }

  .slick-slide {
    display: flex !important;
    justify-content: center !important;
  }
  .swipe {
    width: 450px !important;
    height: 400px;
    padding: 1rem 1rem;
    margin: 0 0px;
    background-color: white;

    @media screen and (max-width: 400px) {
      width: 300px !important;
    }
    img {
      margin: 0 auto;
    }

    .text {
      width: 300px;
      margin: 10px auto;

      p {
        font-size: 0.8rem;
        text-align: center;
      }
    }
    .user {
      margin-top: 2rem;
      img {
        height: 70px;
        border-radius: 100px;
      }

      p {
        text-align: center;
      }
    }

    .column {
      h2 {
        font-size: 5rem;
        line-height: 70px;
        color: #f39292;
        text-align:center;
      }
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
      @media screen and (max-width: 400px) {
        height: 100px;
      }
    }
  }
`;

const data = [
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
    name: "Watches",
    image: "/img/07.png",
  },
  {
    name: "Bags",
    image: "/img/08.png",
  },
  {
    name: "Head Phones",
    image: "/img/10.png",
  },

  {
    name: "Watches",
    image: "/img/07.png",
  },
];
