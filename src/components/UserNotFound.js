import React from "react";
import { Alert, Container } from "react-bootstrap";

const UserNotFound = () => {
  return (
    <Container>
      <Alert variant="dark">
        <h2 className="alert-heading text-center text-white">404 NOT FOUND</h2>
        <p className="text-center">
          Looks like the user does not exist, please enter the correct username
        </p>
        <hr />
        <p className="text-center">Also, check if your internet is properly working</p>
      </Alert>
    </Container>
  );
};

export default UserNotFound;
