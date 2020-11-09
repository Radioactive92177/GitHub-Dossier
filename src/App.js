import React, { Component } from "react";
import Search from "./pages/Search";
import GhPolyglot from "gh-polyglot";
import axios from "axios";

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

  onSearchSubmit = async (userName) => {
    try {
      // ? Fetching Profile data
      const { data } = await axios.get(
        `https://api.github.com/users/${userName}`,
        {
          headers: {
            authorization: "token 300bceeb7c2fabdf0567d1e0e0f6068526655b55",
          },
        }
      );

      // ? Fetching Repo data
      const repoResponse = await axios.get(
        `https://api.github.com/users/${userName}/repos?per_page=5&sort=created_asc`,
        {
          headers: {
            authorization: "token 300bceeb7c2fabdf0567d1e0e0f6068526655b55",
          },
        }
      );

      // ? Getting Language Data
      const me = new GhPolyglot(`${userName}/git-stats`);
      me.userStats(async (err, stats) => {
        this.setState({ languagesData: stats });
      });

      this.setState({
        avatar_url: data.avatar_url,
        html_url: data.html_url,
        public_repos: data.public_repos,
        public_gists: data.public_gists,
        followers: data.followers,
        following: data.following,
        name: data.name,
        blog: data.blog,
        location: data.location,
        created_at: data.created_at,
        hireable: data.hireable,
        twitter_username: data.twitter_username,
        repos: repoResponse.data,
        status: "User Found!",
      });
    } catch (error) {
      this.setState({ status: "Not Found" });
    }
  };

  render() {
    console.log(this.state);
    return (
      <>
        <Search onSearchSubmit={this.onSearchSubmit} />
      </>
    );
  }
}

export default App;
