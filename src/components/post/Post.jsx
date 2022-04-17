import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "./post.css";

export default function Post({ post }) {
  console.log(post);
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
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVertIcon />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img src={post.photo} alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src="assests/like.png" alt="" />
            <img className="likeIcon" src="assests/heart.png" alt="" />
            <span className="postLikeCounter">{post.like}</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
