import React from "react";
import "../css/home.css";
import posts from "../posts.js";

export default function Home() {
  return (
    <div className="row">
      <div className="home-posts container col-md-7 mt-4">
        {posts.map((post) => (
          <div key={post._id} className="posts-content">
            <>
              <div className="imgBx">
                <img src={post.img} alt="user" />
              </div>
              <div className="text-content">{post.txt}</div>
            </>
          </div>
        ))}
      </div>
    </div>
  );
}
