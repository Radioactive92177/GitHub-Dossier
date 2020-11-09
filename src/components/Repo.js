import React from "react";

const Repo = (props) => {
  const {
    html_url,
    name,
    stargazers_count,
    watchers_count,
    forks_count,
  } = props;

  return (
    <>
      <h1>{name}</h1>
      <a href={`${html_url}`}>Repo Link</a>
      <h3>{stargazers_count}</h3>
      <h3>{watchers_count}</h3>
      <h3>{forks_count}</h3>
    </>
  );
};

export default Repo;
