import React from "react";
import { Button, Col, Container, Row } from "reactstrap";

const Hero = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col className="text-md-left">
          <h2 className="text-primary">Title</h2>
          <h3 className="text-primary">Genre :</h3>
          <p md={8}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
            optio! Quas assumenda enim quod praesentium ipsam architecto dolore
            fugiat doloremque dignissimos tempore maiores, amet, quam sunt!
            Cumque perspiciatis aliquam dolore!
          </p>
          <Button>Primary</Button>
        </Col>
        <Col md={4}>
        <img src="https://picsum.photos/300/200" alt="img"/>
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
