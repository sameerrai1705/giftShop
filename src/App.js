import React, { useState } from "react"
import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from "./common/header/Header"
import Pages from "./components/pages/Pages"
import Data from "./components/Data"
import Cart from "./common/Cart/Cart"
import Footer from "./common/footer/Footer"
import Sdata from "./components/shops/Sdata"
import data from "./components/sameer/links"
import Sam from "./components/sameer/sam"
import Random from "./components/random/Random"
import random from "./components/random/randomthings"
import V from "./valentine/v"
import Info from "./valentine/info"
import TopCate from "./components/top/TopCate"
import NewArrivals from "./components/newarrivals/NewArrivals"
import Shop from "./components/shops/Shop"
import FlashDeals from "./components/flashDeals/FlashDeals"
import Discount from "./components/discount/Discount"

function App() {
  
  const { productItems } = Data;
  const { shopItems } = Sdata;
  const {shopItem} = data;
  const {randomItems} = random;
  const {information} = Info;
 
  const [CartItem, setCartItem] = useState([])

  const addToCart = (product) => {
    
    const productExit = CartItem.find((item) => item.id === product.id)
    
    if (productExit) {
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty + 1 } : item)))
    } else {
      setCartItem([...CartItem, { ...product, qty: 1 }])
    }
  }

  const decreaseQty = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id)
    if (productExit.qty === 1) {
      setCartItem(CartItem.filter((item) => item.id !== product.id))
    } else {
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item)))
    }
  }

  return (
    <>
      <Router>
        <Header CartItem={CartItem} />
        <Switch>
          <Route path='/' exact>
            <Pages information = {information}  randomItems = {randomItems} productItems={productItems} addToCart={addToCart} shopItems={shopItems} shopItem = {shopItem} />
          </Route>
          <Route path='/cart' exact>
            <Cart CartItem={CartItem} addToCart={addToCart} decreaseQty={decreaseQty} />
          </Route>
          <Router path='/sameer' exact>
              <Sam shopItem = {shopItem} addToCart={addToCart}/>
          </Router>
          <Router path = '/random' exact>
            <Random randomItems = {randomItems} addToCart = {addToCart} />
          </Router>
          <Router path = '/valentine' >
            <V information = {information} addToCart = {addToCart} />
          </Router>
          <Router path = '/top' >
            <TopCate />
          </Router>
          <Router path = '/newarrivals' >
            <NewArrivals />
          </Router>
          <Router path = '/flashDeals' >
            <FlashDeals productItems = {productItems} addToCart = {addToCart} />
          </Router>
          <Router path = '/shops' >
            <Shop addToCart={addToCart} shopItems = {shopItems}/>
          </Router>
          <Router path = '/discount' >
            <Discount />
          </Router>
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App
