import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import useCart from "../../../../hooks/useCart";
import { addToDb } from "../../../../utilities/fakedb";
import Cart from "../../Cart/Cart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import useProducts from "../../../../hooks/useProducts";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const products = useProducts();
  const [cart, setCart] = useCart(products);
  const handleAddToCart = (product) => {
    const exists = cart.find((pd) => pd.key === product.key);
    let newCart = [];
    if (exists) {
      const rest = cart.filter((pd) => pd.key !== product.key);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, product];
    } else {
      product.quantity = 1;
      newCart = [...cart, product];
    }
    setCart(newCart);
    // save to local storage (for now)
    addToDb(product.key);
  };

  useEffect(() => {
    fetch(`http://localhost:5000/product/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <div>
        <Row xs={1} md={3} className="g-4">
          <div>
            <Col>
              <Card>
                <Card.Img variant="top" src={product.img} />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>

                  <h4>Price:$ {product.price}</h4>
                </Card.Body>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="btn-regular"
                >
                  <FontAwesomeIcon icon={faShoppingCart} /> add to cart
                </button>
              </Card>
            </Col>
          </div>
        </Row>
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
        <Link to="/review">
          <button className="btn-regular">Review Your Order</button>
        </Link>
      </div>
    </div>
  );
};

export default Product;
