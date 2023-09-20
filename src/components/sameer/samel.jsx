import React, { useState } from "react";
import "./sam.css";

const Samel = ({ shopItem, addToCart }) => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };

  const size = {
    height: "240px",
    width: "240px",
    objectFit: "cover",
    borderRadius: "20px",
  };

  return (
    <>

      {shopItem.shopItem.map((item, index) => {
        return (
          <div className="box">
            <div className="product mtop">
              <div className="img">
                <img src={item.src} style={size} alt="" />
                <div className="product-like">
                  <label>{count}</label> <br />
                  <i className="fa-regular fa-heart" onClick={increment}></i>
                </div>
              </div>
              <div className="product-details">
                <div className="rate">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <div className="price">
                  <button onClick={() => shopItem.addToCart(item.src)}>
                    <i className="fa fa-plus"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        );

      })}
    </>
  );
};

export default Samel;
