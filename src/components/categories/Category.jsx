
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Category() {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
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
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
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
  margin: 6rem auto;
  max-width: 100%;
  /* display: flex; */
  align-items: center;

  /* .center{
    width:100%;
    display: flex;
    align-items: center;
    justify-content: center;
   
  } */

  .slick-next{
    right: 0;
  }
  .slick-prev{
    left: 0;
  }

.body_swipe{
display: flex !important;
max-width: 100%;
}

.slick-slide{
  width: 300px!important;
  margin: 0 0rem;
}
  .swipe {
    width: 200px!important;
    height: 200px;
    padding: 0 1rem;
    border-radius: 10px;
    margin: 0 0px;
    img {
      margin: 0 auto;
    }

    p{
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
