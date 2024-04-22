import React, { useEffect, useState } from "react";
import "bulma/css/bulma.min.css";
import axios from "axios";
import { Card, CardBody, CardTitle, CardText, Row, Col } from "reactstrap";
import { NavLink } from "react-router-dom";

function CourseCards() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getCourses();
  }, []);

  const getCourses = async () => {
    const response = await axios.get("https://api.sukmax.my.id/course");
    setCourses(response.data);
  };
  return (
    <div>
      <Row>
        {courses.map((course, index) => {
          return (
            <Col sm={6} lg={3} key={index} className="mb-4">
              <NavLink to={`/detailcourse/${course.id}`}>
                <Card
                  color="light"
                  style={{
                    width: "18rem",
                  }}
                >
                  <img
                    alt="Sample"
                    src={course.url}
                  />
                  <CardBody className="text-center">
                    <CardTitle tag="h5">{course.name}</CardTitle>
                    <CardText>{course.desc}</CardText>
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

export default CourseCards;
