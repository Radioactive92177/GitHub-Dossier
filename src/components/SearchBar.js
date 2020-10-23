import React, { Component } from "react";
import { Container, Form, FormControl, Card } from "react-bootstrap";

export class SearchBar extends Component {
  state = {
    username: "",
  };

  onSearchSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit( this.state.username );
  };

  render() {
    return (
      <Container>
        <Card>
          <Card.Body>
            <h1>Search GitHub Users</h1>
            <p className="lead">
              Enter a username to fetch a user profile and repos
            </p>
            <Form onSubmit={this.onSearchSubmit}>
              <FormControl
                type="search"
                placeholder="GitHub Username..."
                onChange={(e) => {
                  this.setState({ username: e.target.value });
                }}
              ></FormControl>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

export default SearchBar;
