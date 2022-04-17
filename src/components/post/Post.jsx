import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src="/assests/person/1.jpeg"
              alt=""
              className="postProfileImg"
            />
            <span className="postUsername">Arpit Yadav</span>
            <span className="postDate">5 mins ago</span>
          </div>
          <div className="postTopRight">
            <MoreVertIcon />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">Hey! Its my first post</span>
          <img src="assests/post/1.jpeg" alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src="assests/like.png" alt="" />
            <img className="likeIcon" src="assests/heart.png" alt="" />
            <span className="postLikeCounter">9 people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">9 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
