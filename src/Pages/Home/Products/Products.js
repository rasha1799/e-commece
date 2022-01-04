import React, { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import useAuth from "../../../hooks/useAuth";

const Products = () => {
  const { user } = useAuth();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="mt-5">
      <div>
        <Row xs={1} md={3} className="g-4">
          {products.map((product, index) => (
            <div>
              <Col>
                <Card>
                  <Card.Img variant="top" src={product.img} />
                  <Card.Body>
                    <Card.Title>{product.name}</Card.Title>

                    <h4>Price:$ {product.price}</h4>
                    <Link to={`/product/${product._id}`}>
                      <Button>Read MORE </Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            </div>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Products;
