import React from "react";
import Repo from "./Repo";

const Repos = ({ repos }) => {
  return (
    <>
      <h1>Repos</h1>
      {repos.map((repo) => (
        <Repo
          html_url={repo.html_url}
          name={repo.name}
          stargazers_count={repo.stargazers_count}
          watchers_count={repo.watchers_count}
          forks_count={repo.forks_count}
          key={repo.id}
        />
      ))}
    </>
  );
};

export default Repos;
