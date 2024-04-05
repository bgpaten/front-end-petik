import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavbarText,
} from "reactstrap";

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
              <NavLink style={{textDecoration: "none"}} to={'/home'} className="text-light m-3">Home</NavLink>
              <NavLink style={{textDecoration: "none"}} to={'/login'} className="text-light m-3">login</NavLink>
              <NavLink style={{textDecoration: "none"}} to={'/top'} className="text-light m-3">Top Rated</NavLink>
          </Nav>
          <NavbarText>BgPaten</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;
