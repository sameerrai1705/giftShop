import React, { useState } from "react";
import "./rand.css";

const RandomItem = ({ randomItems, addToCart }) => {
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

      {randomItems.randomItems.map((item, index) => {
        return (
          <div className="box">
            <div className="product mtop">
              <div className="img">
                <img src={item.cover} style={size} alt="" />
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
                  <button onClick={() => randomItems.addToCart(item.cover)}>
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

export default RandomItem;
