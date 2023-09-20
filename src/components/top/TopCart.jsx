import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Tdata from "./Tdata";
import { Link } from "react-router-dom";

const TopCart = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
  };

  const size = {
    height: "190px",
    width: "360px",
    objectFit: "cover",
    // borderRadius : "50%"
  };

  return (
    <>
      <Slider {...settings}>
        {Tdata.map((value, index) => {
          return (
            <>
              <div className="box product" key={index}>
                <div className="nametop d_flex">
                  <span className="tleft">{value.para}</span>
                  <span className="tright">{value.desc}</span>
                </div>
                <div className="img">
                  <Link to={value.para}>
                    <img src={value.cover} style={size} alt="" />
                  </Link>
                </div>
              </div>
            </>
          );
        })}
      </Slider>
    </>
  );
};

export default TopCart;
