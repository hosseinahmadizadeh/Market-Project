import React from "react";
import { Row, Col } from "react-bootstrap";

import Product from "../Product/Product";
import products from "../products";

const Home = () => {
  return (
    <div>
      <h1>Products</h1>
      <Row>
        {products.map((item) => {
          return (
            <Col sm={12} md={6} lg={4}>
              <Product product={item} />
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default Home;
