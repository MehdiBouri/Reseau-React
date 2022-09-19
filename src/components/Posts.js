import React from "react";
import { Link } from "react-router-dom";
import posts from "../posts";
import "../css/home.css";

const Posts = () => {
  return (
    <div className="row">
      <div className="home-posts container col-md-7 mt-4">
        {posts.map((post) => (
          <Link
            to="/profile"
            style={{ textDecoration: "none", color: "#5c5c5c" }}
          >
            <div key={post._id} className="posts-content">
              <>
                <div className="imgBx">
                  <img src={post.img} alt="user" />
                </div>
                <div className="text-content">{post.txt}</div>
              </>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Posts;
