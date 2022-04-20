import React from "react";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import "./profile.css";

export default function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileCover">
            <img className="profileCoverImg" src="assests/post/3.jpeg" alt="" />
            <img
              className="profileUserImg"
              src="assests/person/7.jpeg"
              alt=""
            />
          </div>
          <div className="profileInfo">
            <h4 className="profileInfoName">Safak Kocaoglu</h4>
            <span className="profileInfoDesc">Hello my friends!</span>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile />
            {/* this indicates the rightbar is profileone or home */}
          </div>
        </div>
      </div>
    </>
  );
}
