import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { LogOut, reset } from "./features/authSlice";

function NavbarComponent(args) {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const toggle = () => setIsOpen(!isOpen);

  const logout = () => {
    dispatch(LogOut());
    dispatch(reset());
    navigate("/login");
  };

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
              to={"/dashboard"}
              className="text-light mr-3"
            >
              dashboard
            </NavLink>
            <NavLink
              style={{ textDecoration: "none" }}
              to={"/courses"}
              className="text-light mr-3"
            >
              Courses
            </NavLink>
          </Nav>
          {user ? (
            <button onClick={logout} className="button is-light">
              Logout
            </button>
          ) : (
            <NavLink to={"/login"}>
              <button className="button is-lightsss">Login</button>
            </NavLink>
          )}
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;
