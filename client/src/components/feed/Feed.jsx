import React, { useEffect, useState } from "react";
import Share from "../share/Share";
import Post from "../post/Post";
import axios from "axios";
import "./feed.css";

export default function Feed({ username }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // console.log("Feed rendered");
    const fetchPosts = async () => {
      const res = username
        ? await axios.get("http://localhost:8800/api/posts/profile/" + username)
        : await axios.get(
            "http://localhost:8800/api/posts/timeline/628d56f83eb8bf06fc9ed6c0"
          );
      // console.log(res);
      setPosts(res.data);
    };
    fetchPosts();
  }, [username]);

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts.map((p) => (
          <Post key={p._id} post={p} />
        ))}
      </div>
    </div>
  );
}
