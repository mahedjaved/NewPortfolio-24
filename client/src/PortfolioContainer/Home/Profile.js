import React from "react";

function Profile() {
  return (
    <div>
      <div className="profile-container">
        <div className="profile-parent">
          <div className="profile-detials">
            {/* for the icons section on the home page */}
            <div className="colz">
              <a href="https://www.facebook.com/">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="https://www.youtube.com/">
                <i className="fa fa-youtube-square"></i>
              </a>
              <a href="https://uk.linkedin.com/">
                <i className="fa fa-linkedin-square"></i>
              </a>
              <a href="https://x.com/?lang=en">
                <i className="fa fa-twitter-square"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
