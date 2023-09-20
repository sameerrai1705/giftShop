import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Ddata from "./Ddata";
import "../newarrivals/style.css";

const Dcard = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
  };

  const size = {
    height: "180px",
    width: "180px",
    objectFit: "cover",
    // borderRadius : "50%"
  };

  return (
    <>
      <Slider {...settings}>
        {Ddata.map((value, index) => {
          return (
            <>
              <div className="box product" key={index}>
                <div className="img">
                  <img src={value.cover} style={size} alt="" />
                </div>
                <h4>{value.name}</h4>
                <span>{value.price}</span>
                {/* <div className="price">
                  <button onClick={() => value.addToCart(value.cover)}>
                    <i className="fa fa-plus"></i>
                  </button>
                </div> */}
              </div>
            </>
          );
        })}
      </Slider>
    </>
  );
};

export default Dcard;
