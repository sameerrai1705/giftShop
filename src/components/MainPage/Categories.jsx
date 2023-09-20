import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  const data = [
    {
      cateImg: "https://imgcdn.floweraura.com/a-cup-of-love-9977377gf-A.jpg",
      cateName: "top",
    },
    {
      cateImg: "./images/category/cat2.png",
      cateName: "valentine",
    },

    {
      cateImg: "./images/category/cat5.png",
      cateName: "sameer",
    },
    {
      cateImg: "./images/category/cat6.png",
      cateName: "valentine",
    },
    {
      cateImg: "./images/category/cat8.png",
      cateName: "shops",
    },
    {
      cateImg: "./images/category/cat9.png",
      cateName: "newarrivals",
    },
    {
      cateImg: "./images/category/cat10.png",
      cateName: "random",
    },
    {
      cateImg: "./images/category/cat4.png",
      cateName: "discount",
    },
    {
      cateImg: "./images/category/cat11.png",
      cateName: "flashDeals",
    },
    {
      cateImg: "./images/category/cat3.png",
      cateName: "shops",
    },
  ];

  return (
    <>
      <div className="category">
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
      </div>
    </>
  );
};

export default Categories;
