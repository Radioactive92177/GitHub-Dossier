import React from "react";
import { Container } from "react-bootstrap";

const Profile = (props) => {
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
  } = props;

  const months = [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  return (
    <Container>
      <div className="card card-body mb-3">
        <div className="row">
          <div className="col-md-3">
            <img src={avatar_url} alt="" className="img-fluid mb-2" />
            <a
              href={html_url}
              className="btn btn-primary btn-block mb-4"
              rel="noopener noreferrer"
              target="_blank"
            >
              View
            </a>
          </div>

          <div className="col-md-9">
            <span className="badge badge-primary mx-1">
              Public Repos: {public_repos}
            </span>
            <span className="badge badge-warning mx-1">
              Public Gists: {public_gists}
            </span>
            <span className="badge badge-success mx-1">
              Followers: {followers}
            </span>
            <span className="badge badge-info mx-1">
              Following: {following}
            </span>

            <br />
            <br />

            <ul className="list-group">
              <li className="list-group-item">Name: {name}</li>
              
              {blog ? (
                <li className="list-group-item">
                  Wedsite/Blog:{" "}
                  <a
                    href={blog}
                    alt=""
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {blog}
                  </a>
                </li>
              ) : (
                ""
              )}

              <li className="list-group-item">Location: {location}</li>

              <li className="list-group-item">
                Member Since:{" "}
                {months[new Date(created_at).getMonth()] +
                  "-" +
                  new Date(created_at).getDate() +
                  "-" +
                  new Date(created_at).getFullYear()}
              </li>
            </ul>

            <br />

            <span
              className={`badge badge-${hireable ? "success" : "danger"} mx-1`}
            >
              Available for hire : {hireable ? "Yes" : "No"}
            </span>

            {twitter_username ? (
              <span className="badge badge-info mx-1">
                Twitter :{" "}
                <a
                  href={`http://twitter.com/${twitter_username}`}
                  rel="noopener noreferrer"
                  target="_blank"
                  style={{ color: "white" }}
                >
                  @{twitter_username}
                </a>
              </span>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Profile;
