import React from "react";
import { Container, Navbar } from "react-bootstrap";

const Header = ({ brand }) => {
  return (
    <>
      <Navbar bg={"primary"} variant={"dark"}>
        <Container>
          <Navbar.Brand href="/" style={{width:"100%", textAlign:"center"}}>
            {brand}
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
