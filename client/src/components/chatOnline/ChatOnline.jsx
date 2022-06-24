import React from "react";
import { useEffect, useState } from "react";
import "./chatOnline.css";

export default function ChatOnline() {
  const [friends, setFriends] = useState([]);
  const [onlineFriends, setOnlineFriends] = useState([]);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className="chatOnline">
      <div className="chatOnlineFriend" onClick={() => handleClick(o)}>
        <div className="chatOnlineImgContainer">
          <img
            className="chatOnlineImg"
            src={
              o?.profilePicture
                ? PF + o.profilePicture
                : PF + "person/noAvatar.png"
            }
            alt=""
          />
          <div className="chatOnlineBadge"></div>
        </div>
        <span className="chatOnlineName">{o?.username}</span>
      </div>
    </div>
  );
}
