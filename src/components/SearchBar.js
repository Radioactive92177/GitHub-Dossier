import React, { Component } from "react";

class SearchBar extends Component {
  state = {
    userName: "",
  };

  onTermSubmit = (e) => {
    e.preventDefault();
    this.props.onSearchSubmit(this.state.userName);
  };

  render() {
    return (
      <>
        <form action="" onSubmit={this.onTermSubmit}>
          <label htmlFor="searchBar">Username: </label>
          <input
            type="search"
            name="searchBar"
            id="searchBar"
            onChange={(e) => this.setState({ userName: e.target.value })}
          />
        </form>
      </>
    );
  }
}

export default SearchBar;
