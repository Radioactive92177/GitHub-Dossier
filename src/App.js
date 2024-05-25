import React, { Component } from "react";
import Search from "./pages/Search";
import UserProfile from "./pages/UserProfile";
import Repos from "./components/Repos";
import Languages from "./components/Languages";
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
    bio: "",
    repos: {},
    status: "",
    languagesData: [],
    searched: false,
  };

  onSearchSubmit = async (userName) => {
    try {
      // ? Fetching Profile data
      const { data } = await axios.get(
        `https://api.github.com/users/${userName}`
      );

      // ? Fetching Repo data
      const repoResponse = await axios.get(
        `https://api.github.com/users/${userName}/repos?per_page=5&sort=created_asc`
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
        bio: data.bio,
        repos: repoResponse.data,
        status: "User Found!",
        searched: true,
      });
    } catch (error) {
      this.setState({ status: "Not Found" });
    }
  };

  renderUserData = () => {
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
      repos,
      languagesData,
    } = this.state;

    return (
      <>
        <a
          href="/"
          onClick={() => {
            window.location.reload();
          }}
        >
          Search another
        </a>
        <UserProfile
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
        <Repos repos={repos} />
        <Languages languagesData={languagesData} />
      </>
    );
  };
  changePage = () => {
    const { status } = this.state;
    return status === "User Found!"
      ? this.renderUserData()
      : status === ""
      ? ""
      : "User Not Found";
  };

  render() {
    const { searched, bio } = this.state;
    console.log(bio);
    return (
      <>
        {searched === false ? (
          <Search onSearchSubmit={this.onSearchSubmit} />
        ) : (
          this.changePage()
        )}
      </>
    );
  }
}

export default App;
