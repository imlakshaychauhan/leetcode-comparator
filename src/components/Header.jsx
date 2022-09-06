import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Link style={{ textDecoration: "none" }} to="/">
          <Navbar.Brand>LeetCode Profile Comparator</Navbar.Brand>
        </Link>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className="mx-1"> Created By</Navbar.Text>
          <Navbar.Text className="mx-1">
            <a href="#">Lakshay Chauhan</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
