import React, { Component } from "react";
import ProfilePic from "../components/ProfilePic";
import PersonalDetails from "../components/PersonalDetails";

export class UserProfile extends Component {
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
    } = this.props;
    return (
      <>
        <h1>Profile Data</h1>
        <ProfilePic pic={avatar_url} />
        <PersonalDetails
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
      </>
    );
  }
}

export default UserProfile;
