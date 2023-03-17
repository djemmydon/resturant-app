import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Category() {
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
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint:1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <Body>
      <Slider {...settings}>
        {data.map((item) => (
          <div className="swipe" key={item.image}>
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
    display: flex!important;
    justify-content: center!important;
  }
  .swipe {
    width: 350px !important;
    height: 200px;
    padding: 0 1rem;
    border-radius: 10px;
    margin: 0 0px;

    @media screen and (max-width: 400px) {
      width: 200px !important;
    }
    img {
      margin: 0 auto;
    }

    p {
      font-size: 1rem;
      text-align: center;
    }

    @media screen and (max-width: 600px) {
      width: 100%;
      height: 100%;
    }
    img {
      height: 150px;
      object-fit: cover;
      transition: all .3s;
      :hover{
        transform: scale(1.1);
      }

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
