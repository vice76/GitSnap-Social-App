import React from "react";
import "./rightbar.css";

export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img src="assests/gift.png" alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b>Pola Foster</b>and <b>3 others</b> have a birthday today
          </span>
        </div>
        <img src="assests/ad.png" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          <li className="rightbarFriend">
            <div className="rightbarProfileImgConatiner">
              <img
                className="rightbarProfileImg"
                src="assests/person/3.jpeg"
                alt=""
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">John Carter</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
