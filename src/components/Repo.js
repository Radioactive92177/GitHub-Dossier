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
    <div className="card card-body mb-2">
      <div className="row">
        <div className="col-md-6">
          <a href={html_url} rel="noopener noreferrer" target="_blank" style={{fontWeight:"bolder"}}>
            {name}
          </a>
        </div>
        <div className="col-md-6">
          <span className="badge badge-primary">Stars: {stargazers_count}</span>
          <span className="badge badge-warning">Watchers: {watchers_count}</span>
          <span className="badge badge-success">Forks: {forks_count}</span>
        </div>
      </div>
    </div>
  );
};

export default Repo;
