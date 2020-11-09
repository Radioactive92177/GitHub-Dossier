import React, { Component } from "react";
import ProfilePic from "../components/ProfilePic";

export class UserProfile extends Component {
  render() {
    return (
      <>
        <h1>Profile Data</h1>
        <ProfilePic pic={this.props.avatar_url} />
      </>
    );
  }
}

export default UserProfile;
