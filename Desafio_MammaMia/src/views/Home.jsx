import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { Button, Card, ListGroup, Container }from "react-bootstrap";

function Home() {
  const [pizzas, setPizzas] = useState([]);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const detailspizza = (pizzaId) => {
    navigate(`/pizza/${pizzaId}`);
  };

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const response = await fetch(
          "https://mocki.io/v1/47314783-1830-4449-ae2d-15b457190079"
        );
        const data = await response.json();
        setPizzas(data);
      } catch (error) {
        console.error("Error fetching pizzas:", error);
      }
    };

    fetchPizzas();
  }, []);

  return (
    <div>
      <div className="header">
        <img
          src="https://info.mercadona.es/img-cont/es/nuevas-pizzas-con-masa-rellena-de-queso-mov.jpg"
          alt="Imagen encabezado"
          className="header-image"
        />
        <div className="header-text">
          <h1>¡Pizzeria Mamma Mia!</h1>
          <p>¡Tenemos las mejores pizzas que podrás encontar!</p>
        </div>
      </div>

      <Container>
        <div className="home-grid">
          {pizzas.map((pizza) => (
            <Card key={pizza.id} style={{ width: "25rem" }}>
              <Card.Img variant="top" src={pizza.img} alt={pizza.name} />
              <ListGroup className="list-group-flush">
                <ListGroup.Item>
                  <h3 className="mt-3">
                    <strong>
                      {pizza.name.charAt(0).toUpperCase() + pizza.name.slice(1)}
                    </strong>
                  </h3>
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Ingredientes:</strong>
                  <ul>
                    {pizza.ingredients.map((ingredient) => (
                      <li key={ingredient}>
                        🍕{" "}
                        {ingredient.charAt(0).toUpperCase() +
                          ingredient.slice(1)}
                      </li>
                    ))}
                  </ul>
                </ListGroup.Item>
                <div className="precio">
                  <h4>
                    <strong>$ {pizza.price.toLocaleString()}</strong>
                  </h4>
                </div>
                <ListGroup.Item className="d-flex justify-content-around align-items-center">
                  <Button
                    onClick={() => detailspizza(pizza.id)}
                    className="m-2 text-white"
                    variant="info"
                  >
                    Ver más 👀{" "}
                  </Button>
                  <Button
                    onClick={() => addToCart(pizza)}
                    variant="danger"
                    className="m-3"
                  >
                    {" "}
                    Añadir 🛒
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Home;
