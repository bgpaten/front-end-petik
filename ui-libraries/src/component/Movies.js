import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  Button,
  Row,
  Col,
} from "reactstrap";

function Movies() {
  const Movies = [
    {
      title: "Movie 1",
      year: "2020",
    },
    {
      title: "Movie 2",
      year: "2020",
    },
    {
      title: "Movie 3",
      year: "2020",
    },
    {
      title: "Movie 4",
      year: "2020",
    },
    {
      title: "Movie 5",
      year: "2020",
    },
    {
      title: "Movie 6",
      year: "2020",
    },
    {
      title: "Movie 7",
      year: "2020",
    },
    {
      title: "Movie 8",
      year: "2020",
    },
    {
      title: "Movie 9",
      year: "2020",
    },
    {
      title: "Movie 10",
      year: "2020",
    },
  ];
  return (
    <div>
      <Row>
        {Movies.map((movie) => {
          return (
            <Col>
              <Card
                color="light"
                style={{
                  width: "18rem",
                }}
              >
                <img alt="Sample" src="https://picsum.photos/300/200?random=1" />
                <CardBody>
                  <CardTitle tag="h5">{movie.title}</CardTitle>
                  <CardText>{movie.year}</CardText>
                  <Button>Button</Button>
                </CardBody>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default Movies;
