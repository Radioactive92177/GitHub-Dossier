import React from "react";
import { Container, Navbar } from "react-bootstrap";

const Header = ({brand}) => {
  return (
    <>
      <Navbar bg={"primary"} variant={"dark"}>
        <Container>
          <Navbar.Brand href="#">{brand}</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
