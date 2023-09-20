import React from "react";
import './rand.css';
import RandomItem from "./RandomItem";

const Random = (randomItems , addToCart) => {
    const some = {
        display : "flex",
        alignItems : "center",
        justifyContent : "center"
    }
    return (
        <>
        {/* {console.log(randomItems)} */}
            <section className='shop background ' style={some}>
            <div className='contentWidth'>
                <div className='heading d_flex'>
                <div className='heading-left row  f_flex'>
                    <h2>Random Gifts</h2>
                </div>
                </div>
                <div className='product-content  grid1'>
                <RandomItem addToCart={addToCart} randomItems={randomItems} />
                </div>
            </div>
        </section>
        </>
    );
}

export default Random;