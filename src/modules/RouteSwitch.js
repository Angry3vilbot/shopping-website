import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from "../App"
import Catalogue from "./Catalogue"
import Cart from "./Cart"
import Header from "./Header"
import React, { useState } from 'react';

const RouteSwitch = () => {
  const [itemArray, setItemArray] = useState([])
    return (
          <BrowserRouter basename="/shopping-website">
            <Header />
            <Routes>
              <Route path="/shopping-website" element={<App title="LapTopShopUA - Home"/>} />
              <Route path="/catalogue" element={<Catalogue title="LapTopShopUA - Catalogue" setItemArray={setItemArray} itemArray={itemArray}/>} />
              <Route path="/cart" element={<Cart title="LapTopShopUA - Cart" itemArray={itemArray}/>} />
            </Routes>
          </BrowserRouter>
        )
}

export default RouteSwitch