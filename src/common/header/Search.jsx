import React from "react"
// import logo from "../../components/assets/images/logo.svg"
import { Link } from "react-router-dom"


const Search = ({ CartItem }) => {
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search")
    search.classList.toggle("active", window.scrollY > 100)
  })

  return (
    <>
      <section className='search'>
        <div className='container c_flex'>
        <div className='logo-width'>
          <div className="lombu">
                
                    <span>G</span>
                    <span>i</span>
                    <span>f</span>
                    <span>t</span>
                    <span>&nbsp;&nbsp;</span>
                    <span>B</span>
                    <span>o</span>
                    <span>x</span>
            </div>
          </div>

          <div className='icon f_flex width'>
            <i className='fa fa-user icon-circle'></i>
            <div className='cart'>
              <Link to='/Cart'>
                <i className='fa fa-shopping-bag icon-circle'></i>
                <span>{CartItem.length === 0 ? "" : CartItem.length}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Search
