import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function Navigation() {
  const { getTotalPrice } = useCart();

  return (
    <Navbar fixed="top" style={{ background: "rgb(2, 173, 175)" }}>
      <Container>
        <Link to="/" className="text-white ms-3 text-decoration-none">
          {" "}
          <h4>🍕 Pizzeria Mamma Mia! </h4>
        </Link>
        <Link to="/cart" className="text-white ms-3 text-decoration-none">
          {" "}
          <h4>🛒 Total: ${getTotalPrice().toLocaleString()} </h4>
        </Link>
      </Container>
    </Navbar>
  );
}

export default Navigation;
