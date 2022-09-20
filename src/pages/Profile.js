import React from "react";
import posts from "../posts";
import "../css/profile.css";
const users = posts.filter((post) => post._id < 2);
const Actu = () => {
  return (
    <>
      <div className="container">
        <div className="card">
          <div className="details">
            <div className="image">
              {users.map((user) => {
                return (
                  <>
                    <img src={user.img} alt="user" />
                  </>
                );
              })}
            </div>
            <div className="profile">
              <h2>username</h2>
              <div className="spec">
                <span>Developpeuse</span>
                <span>Pays, Région</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">

        <div className="content">
          <h5>Recents Posts</h5>
          {users.map((user) => {
            return (
              <>
                <p>{user.txt}</p>
              </>
            );
          })}
        </div>
      </div>

    </>
  );
};

const Recent_posts = () => { };
export default function Profile() {
  return (
    <main>
      <Actu />
      <Recent_posts />
    </main>
  );
}
