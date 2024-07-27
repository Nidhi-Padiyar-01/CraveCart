import React from "react";
import Navbar from "./components/Navbar/Navbar"
import { Route,Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import Placeorder from "./pages/placeorder/Placeorder";

const App = () => {
  return (
    <div className="app">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/order" element={<Placeorder/>}/>



      </Routes>
    </div>
  );
};

export default App;