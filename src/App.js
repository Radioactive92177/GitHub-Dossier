import React, { Component } from "react";
import axios from "axios";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import Profile from "./components/Profile";

class App extends Component {
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
  };

  onSearchSubmit = async (userName) => {
    // ** Fetching Profile Data
    const { data } = await axios.get(
      `https://api.github.com/users/${userName}`,
      {
        headers: {
          authorization: "token 300bceeb7c2fabdf0567d1e0e0f6068526655b55",
        },
      }
    );

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
    });
  };
  render() {
    const {
      avatar_url,
      html_url,
      public_repos,
      public_gists,
      followers,
      following,
      name,
      blog,
      location,
      created_at,
      hireable,
      twitter_username,
    } = this.state;
    return (
      <>
        <Header brand="GitHub Dossier" />
        <SearchBar onSubmit={this.onSearchSubmit} />
        {name !== "" ? (
          <Profile
            avatar_url={avatar_url}
            html_url={html_url}
            public_repos={public_repos}
            public_gists={public_gists}
            followers={followers}
            following={following}
            name={name}
            blog={blog}
            location={location}
            created_at={created_at}
            hireable={hireable}
            twitter_username={twitter_username}
          />
        ) : (
          ""
        )}

        <Footer />
      </>
    );
  }
}

export default App;
