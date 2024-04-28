import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Cart from "./views/Cart";
import PizzaDetail from "./views/PizzaDetail";
import Home from "./views/Home";
import Navigation from "./components/Navigation";

function App() {
  return (
    <CartProvider>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/pizza/:id" element={<PizzaDetail />} />
        </Routes>
      </div>
    </CartProvider>
  );
}

export default App;
