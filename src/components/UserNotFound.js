import React from "react";
import { Alert, Container } from "react-bootstrap";

const UserNotFound = () => {
  return (
    <Container>
      <Alert variant="danger">User not found!</Alert>
    </Container>
  );
};

export default UserNotFound;
