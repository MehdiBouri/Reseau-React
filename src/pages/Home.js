import React from "react";
import Posts from "../components/Posts";

export default function Home() {
  return (
    <main>
      <div className="container">
        <div className="row">
          <div className="home-posts col-md-8 mt-3">
            <Posts />
          </div>
        </div>
      </div>
    </main>
  );
}
