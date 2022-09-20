import React from "react";
import { Link } from "react-router-dom";
import posts from "../posts";
import "../css/home.css";

const Posts = () => {
  return (
    <>
      {posts.map((post) => (
        <Link
          to="/profile"
          key={post._id}
          style={{ textDecoration: "none", color: "#5c5c5c" }}
        >
          <div className="card">
            <div className="row g-0">
              <div className="col-2">
                <img
                  src={post.img}
                  className="w-100 rounded-circle"
                  alt={post.pseudo}
                />
              </div>
              <div className="col-10">
                <div className="card-body">
                  <div className="card-infos">
                    <h5 className="card-title">{post.pseudo}</h5>
                    <small className="text-muted">Il y a 3 minutes</small>
                  </div>
                  <p className="card-text">{post.txt}</p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default Posts;
