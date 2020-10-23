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
  return (
    <Container>
      <div className="card card-body mb-3">
        <div className="row">
          <div className="col-md-3">
            <img src={avatar_url} alt="" className="img-fluid mb-2" />
            <a href={html_url} className="btn btn-primary btn-block mb-4">
              View
            </a>
          </div>

          <div className="col-md-9">
            <span className="badge badge-primary">
              Public Repos: {public_repos}
            </span>
            <span className="badge badge-warning">
              Public Gists: {public_gists}
            </span>
            <span className="badge badge-success">Followers: {followers}</span>
            <span className="badge badge-info">Following: {following}</span>

            <br />
            <br />

            <ul className="list-group">
              <li className="list-group-item">Name: {name}</li>
              <li className="list-group-item">
                Wedsite/Blog:{" "}
                <a href={blog} alt="">
                  {blog}
                </a>
              </li>
              <li className="list-group-item">Location: {location}</li>
              <li className="list-group-item">Member Since: {created_at}</li>
            </ul>

            <br />

            <span className="badge badge-success">
              Available for hire : {hireable}
            </span>
            <span className="badge badge-info">Twitter : @{twitter_username}</span>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Profile;
