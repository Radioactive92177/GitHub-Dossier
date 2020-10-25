import React from "react";
import { Container } from "react-bootstrap";
import Repo from "./Repo";

const Repos = ({ repoData }) => {
  return (
    <Container>
      <h3 className="page-heading mb-3">Latest Public Repos</h3>
      {repoData.map((repo) => (
        <Repo
          html_url={repo.html_url}
          name={repo.name}
          stargazers_count={repo.stargazers_count}
          watchers_count={repo.watchers_count}
          forks_count={repo.forks_count}
        />
      ))}
    </Container>
  );
};

export default Repos;
