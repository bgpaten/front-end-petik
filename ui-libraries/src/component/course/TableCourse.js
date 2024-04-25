import Table from "react-bootstrap/Table";
import Layout from "../auth/Layout";
import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

function TableCourse() {
  const [courses, setCourses] = useState([]);
  const [currentPage, setCurrentPage] = useState();
  const [coursesPerPage] = useState(5);

  useEffect(() => {
    getCourses();
  }, []);

  const getCourses = async () => {
    const response = await axios.get("https://api.sukmax.my.id/course");
    setCourses(response.data);
  };

  const LastCourse = currentPage * coursesPerPage;
  const FirstCourse = LastCourse - coursesPerPage;
  const currentCourse = courses.slice(FirstCourse, LastCourse);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const deleteCourse = async (id) => {
    try {
      await axios.delete(`https://api.sukmax.my.id/course/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <h2 className="title">Courses</h2>
      <h3 className="subtitle">List of Course</h3>
      <Link to={"/course/add"} className="button is-primary mb-2">
        Add New
      </Link>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Desc</th>
            <th>Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {" "}
          {courses.map((course, index) => {
            let no = index + 1;
            return (
              <tr>
                <td>{no}</td>
                <td>{course.name}</td>
                <td>{course.desc}</td>
                <td>
                  <img src={course.url} alt="" width={123} />
                </td>
                <td>
                  <Link
                    to={`/course/edit/${course.id}`}
                    className="button is-info is-small"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => {
                      if (
                        window.confirm("Apakah anda yakin ingin menghapus?")
                      ) {
                        deleteCourse(course.id);
                      }
                    }}
                    className="button is-small is-danger ml-2"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <Pagination>
        <PaginationItem>
          <PaginationLink first onClick={() => paginate(1)} />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink previous onClick={() => paginate(currentPage - 1)} />
        </PaginationItem>
        {[...Array(Math.ceil(courses.length / coursesPerPage)).keys()].map(
          (number) => (
            <PaginationItem
              key={number + 1}
              active={number + 1 === currentPage}
            >
              <PaginationLink onClick={() => paginate(number + 1)}>
                {number + 1}
              </PaginationLink>
            </PaginationItem>
          )
        )}
        <PaginationItem>
          <PaginationLink next onClick={() => paginate(currentPage + 1)} />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            last
            onClick={() => paginate(Math.ceil(courses.length / coursesPerPage))}
          />
        </PaginationItem>
      </Pagination>
    </Layout>
  );
}

export default TableCourse;
