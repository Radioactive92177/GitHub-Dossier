import React from "react";

const Profile = () => {
  return (
    <>
      <div className="card card-body mb-3">
        <div className="row">
          <div className="col-md-3">
            <img src="/" alt="" className="img-fluid mb-2" />
            <a href="/" className="btn btn-primary btn-block mb-4">
              View
            </a>
          </div>

          <div className="col-md-9">
            <span className="badge badge-primary">Public Repos: </span>
            <span className="badge badge-warning">Public Gists: </span>
            <span className="badge badge-success">Followers: </span>
            <span className="badge badge-info">Following: </span>

            <br />
            <br />

            <ul className="list-group">
              <li className="list-group-item">Name: Radioactive92177</li>
              <li className="list-group-item">
                Wedsite/Blog:{" "}
                <a href="/" alt="">
                  https://pedelcode.com
                </a>
              </li>
              <li className="list-group-item">Location: Punjab</li>
              <li className="list-group-item">Member Since: 2018</li>
            </ul>

            <br />

            <span className="badge badge-success">
              Available for hire : Yes
            </span>
            <span className="badge badge-info">Twitter : @pedelcode</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
