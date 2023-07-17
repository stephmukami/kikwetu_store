import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home'
import Shop from './components/Shop'
import Checkout from './components/Checkout'
import Navbar from "./components/Navbar";
import Item from "./components/Item";
import {products} from './components/ProductCatalog'



export default function RouterSwitch({ increaseAmount,decreaseAmount,onQuantityChange,addtoCart,removeFromCart,selected}){
    return (
        <>
        

         <BrowserRouter>
         <Navbar/>

      <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop  />} />
          <Route path="/checkout" element={<Checkout  
          addtoCart = {addtoCart}
          removeFromCart = {removeFromCart}
          selected = {selected}
          onQuantityChange={ onQuantityChange}
          increaseAmount={increaseAmount}
          decreaseAmount={decreaseAmount}
          />
          } />
          <Route path="/item/:id" element={<Item
           products ={products}
           addtoCart={addtoCart}
          />} />

      </Routes>
      </BrowserRouter>
        </>
     
    )
}