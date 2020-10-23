import React, { Component } from "react";
import { Container, Form, FormControl, Card } from "react-bootstrap";

export class SearchBar extends Component {
  render() {
    return (
      <Container>
        <Card>
          <Card.Body>
            <h1>Search GitHub Users</h1>
            <p className="lead">
              Enter a username to fetch a user profile and repos
            </p>
            <Form>
              <FormControl
                type="search"
                placeholder="GitHub Username..."
              ></FormControl>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

export default SearchBar;
