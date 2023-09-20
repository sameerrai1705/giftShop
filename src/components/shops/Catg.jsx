import React from "react";
import { Link } from "react-router-dom";
const Catg = () => {
  const data = [
    {
      cateImg: "./images/category/cat-1.png",
      cateName: "sameer",
    },
    {
      cateImg: "./images/category/cat-2.png",
      cateName: "random",
    },
    {
      cateImg: "./images/category/cat-1.png",
      cateName: "valentine",
    },
    // {
    //   cateImg: "./images/category/cat-2.png",
    //   cateName: "Guitars",
    // },
    // {
    //   cateImg: "./images/category/cat-1.png",
    //   cateName: "Chocolates",
    // }
  ];
  return (
    <>
      <div className="category">
        <div className="chead d_flex">
          <h1>Gift </h1>
          <h1>Shop </h1>
        </div>
        {data.map((value, index) => {
          return (
            <div className="box f_flex" key={index}>
              <Link to={value.cateName}>
                <img src={value.cateImg} alt="" />
                <span>{value.cateName}</span>
              </Link>
            </div>
          );
        })}
        {/* <div className='box box2'>
          <button></button>
        </div> */}
      </div>
    </>
  );
};

export default Catg;
