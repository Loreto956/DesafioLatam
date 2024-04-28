import React from "react";
import { useCart } from "../context/CartContext";
import { Container, Button, Table } from "react-bootstrap";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function Cart() {
  const { cartItems, addToCart, removeFromCart, getTotalPrice } = useCart();

  return (
    <Container>
      <h4 className="carrito">Detalles del pedido</h4>
      <Table className="tabdet">
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td>
                <img
                  src={item.img}
                  alt={item.name}
                  style={{ width: "100px" }}
                />
              </td>
              <td>{capitalizeFirstLetter(item.name)}</td>
              <td style={{ color: "green" }}>
                ${(item.price * item.counter).toLocaleString()}
              </td>

              <td className="text-end">
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => removeFromCart(item.id)}
                >
                  -
                </Button>
              </td>
              <td className="text-center">{item.counter}</td>
              <td className="text-start">
                {" "}
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => addToCart(item)}
                >
                  +
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="d-flex justify-content-around align-items-center mt-5">
        <h4>Total ${getTotalPrice().toLocaleString()}</h4>
        <Button variant="success">Ir a Pagar</Button>
      </div>
    </Container>
  );
}

export default Cart;
