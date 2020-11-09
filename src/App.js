import React, { Component } from "react";
import Search from "./pages/Search";

export class App extends Component {
  state = {
    avatar_url: "",
    html_url: "",
    public_repos: null,
    public_gists: null,
    followers: null,
    following: null,
    name: "",
    blog: "",
    location: "",
    created_at: null,
    hireable: "",
    twitter_username: "",
    repos: {},
    status: "",
    languagesData: [],
  };

  onSearchSubmit = (userName) => {
    console.log(userName);
  };

  render() {
    return (
      <>
        <Search onSearchSubmit={this.onSearchSubmit} />
      </>
    );
  }
}

export default App;
