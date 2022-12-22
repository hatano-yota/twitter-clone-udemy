import React from "react";
import "./Timeline.css";
import TweetBox from "./TweetBox";
import Post from "./Post";

const Timeline = () => {
  return (
    <div className="timeline">
      {/* Header */}
      <div className="timeline_header">
        <h2>ホーム</h2>
      </div>

      {/* TweetBox */}
      <TweetBox />

      {/* Post */}
      <Post
        displayName="よた"
        userName="katokoto_666"
        verified={true}
        text="すずきとゆみき尊い"
        avatar="https://source.unsplash.com/random"
        image="https://source.unsplash.com/random"
      />
    </div>
  );
};

export default Timeline;
