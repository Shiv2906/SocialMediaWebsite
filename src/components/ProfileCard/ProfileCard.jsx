import React from "react";
import cover from "../../img/cover.jpg";
import profile from "../../img/profileImg.jpg";
import "./ProfileCard.css";
function ProfileCard() {
  return (
    <div className="ProfileCard">
      {/* Div for Profile Images */}
      <div className="ProfileImages">
        <img src={cover} alt="" />
        <img src={profile} alt="" />
      </div>
      {/* Div for display user information */}
      <div className="ProfileName">
        <span>ShivKumar</span>
        <span>Software Developer</span>
      </div>


    {/* Div for display Follower and Following status */}
    <div className="followingStatus">
        <hr/>
        <div className="">
            <div className="follow">
                <span>50</span>
                <span>Followings</span>
            </div>
            <div className="vl"></div>
            <div className="follow">
                <span>4000</span>
                <span>Followers</span>
            </div>
        </div>
        <hr/>
    </div>
    <span>My Profile</span>

    </div>
  );
}

export default ProfileCard;
