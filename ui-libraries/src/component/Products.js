import React from "react";
import "bulma/css/bulma.min.css";

import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  Row,
  Col,
} from "reactstrap";
import { NavLink } from "react-router-dom";

function Products() {
  const Products = [
    {
      title: "product 1",
      price: "200000",
    },
    {
      title: "product 2",
      price: "2020000",
    },
    {
      title: "product 3",
      price: "2020000",
    },
    {
      title: "product 4",
      price: "2020000",
    },
    {
      title: "product 5",
      price: "202000",
    },
    {
      title: "product 6",
      price: "2020000",
    },
    {
      title: "product 7",
      price: "2020000",
    },
    {
      title: "product 8",
      price: "202000000",
    },
    {
      title: "product 9",
      price: "20200000",
    },
    {
      title: "product 10",
      price: "20200000",
    },
  ];
  return (
    <div>
      <Row>
        {Products.map((product, index) => {
          return (
            <Col sm={6} lg={3} key={index} className="mb-4">
              <NavLink to={'/detail'}>
                <Card
                  color="light"
                  style={{
                    width: "18rem",
                  }}
                >
                  <img
                    alt="Sample"
                    src="https://picsum.photos/300/200?random=1"
                  />
                  <CardBody className="text-center">
                    <CardTitle tag="h5">{product.title}</CardTitle>
                    <CardText>{product.price}</CardText>
                  </CardBody>
                </Card>
              </NavLink>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default Products;
