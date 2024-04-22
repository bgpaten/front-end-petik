import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav } from "reactstrap";

function NavbarComponent(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar {...args} expand="md" className="bg-primary navbar-dark">
        <NavbarBrand href="/">Jual-in</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavLink
              style={{ textDecoration: "none" }}
              to={"/"}
              className="text-light mr-3"
            >
              Home
            </NavLink>
            <NavLink
              style={{ textDecoration: "none" }}
              to={"/login"}
              className="text-light mr-3"
            >
              login
            </NavLink>
            <NavLink
              style={{ textDecoration: "none" }}
              to={"/courses"}
              className="text-light mr-3"
            >
              Courses
            </NavLink>
          </Nav>
          <NavLink to={'/login'}>
            <button className="button is-lightsss">Login</button>
          </NavLink>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;
