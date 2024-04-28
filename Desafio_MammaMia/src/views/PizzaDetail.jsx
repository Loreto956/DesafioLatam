import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { Container, Table, Button } from "react-bootstrap";

function PizzaDetail() {
  const [pizza, setPizza] = useState(null);
  const { id } = useParams();
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const response = await fetch(
          "https://mocki.io/v1/47314783-1830-4449-ae2d-15b457190079"
        );
        const data = await response.json();
        const selectedPizza = data.find((p) => p.id === id);
        setPizza(selectedPizza);
      } catch (error) {
        console.error("Error fetching pizza:", error);
      }
    };

    fetchPizza();
  }, [id]);

  if (!pizza) return <div>Loading...</div>;

  return (
    <Container>
      <Table bordered>
        <tbody>
          <tr>
            <td style={{ width: "50%" }}>
              <img
                src={pizza.img}
                alt={pizza.name}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </td>
            <td>
              <td>
                <h2>
                  {pizza.name.charAt(0).toUpperCase() + pizza.name.slice(1)}
                </h2>
              </td>
              <p>{pizza.desc}</p>
              <strong>Ingredientes:</strong>
              <ul>
                {pizza.ingredients.map((ingredient) => (
                  <li key={ingredient}>
                    🍕{" "}
                    {ingredient.charAt(0).toUpperCase() + ingredient.slice(1)}
                  </li>
                ))}
              </ul>
              <div className="d-flex justify-content-between align-items-center">
                <h4>
                  <strong>Precio ${pizza.price.toLocaleString()}</strong>
                </h4>
                <Button
                  onClick={() => addToCart(pizza)}
                  variant="danger"
                  className="m-3"
                >
                  {" "}
                  Añadir 🛒
                </Button>
              </div>
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}

export default PizzaDetail;
