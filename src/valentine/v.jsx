import React from "react";
import Val from "./val";
import "./v.css";

const V = ({information , addToCart }) => {
  const some = {
    display : "flex",
    alignItems : "center",
    justifyContent : "center"
}
  return (
    <>
    {/* {console.log(information)}; */}
      <section className="shop background" style={some}>
        <div className="contentWidth">
          <div className="heading d_flex">
            <div className="heading-left row  f_flex">
              <h2>valentine Special Gifts</h2>
            </div>
          </div>
          <div className="product-content  grid1">
            <Val information={information} addToCart={addToCart}  />
          </div>
        </div>
      </section>
    </>
  );
};

export default V;
