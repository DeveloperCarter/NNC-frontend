import React from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";

const NavBar = ({ logout }) => {
  const token = localStorage.getItem("NNC-token");
  return (
    <div>
      <Navbar fixed="true" color="dark" dark expand="md">
        <NavbarBrand className="text-black" href="/">
          NNC
        </NavbarBrand>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink href="/science">Science</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/business">Business</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/sports">Sports</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/tech">Technology</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/health">Health</NavLink>
          </NavItem>
        </Nav>
        {token !== null ? (
          <a href="logout" onClick={logout}>
            <NavbarText>Logout</NavbarText>
          </a>
        ) : (
          <div>
            <a href="/login">
              <NavbarText className="pr-2">Login</NavbarText>
            </a>
            <a href="/signup">
              <NavbarText>Sign Up</NavbarText>
            </a>
          </div>
        )}
      </Navbar>
    </div>
  );
};

export default NavBar;
