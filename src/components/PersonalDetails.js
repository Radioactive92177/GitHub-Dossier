import React from "react";

const PersonalDetails = ({
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
}) => {
  return (
    <>
      <h1>{name}</h1>
      <a href={`${html_url}`}>
        <h1>See Profile</h1>
      </a>
      <h4>{public_repos}</h4>
      <h4>{public_gists}</h4>
      <h4>{followers}</h4>
      <h4>{following}</h4>
      <a href={`${blog}`}>
        <h3>{blog}</h3>
      </a>
      <h4>{location}</h4>
      <h4>{created_at}</h4>
      <h4>{hireable}</h4>
      <h4>{twitter_username}</h4>
    </>
  );
};

export default PersonalDetails;
