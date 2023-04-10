import React, { useEffect, useState } from "react";
import FlipMove from "react-flip-move";
import "./Timeline.css";
import TweetBox from "./TweetBox";
import Post from "./Post";
import db from "../../firebase";
import {
  collection,
  // getDocs,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { PostType } from "@/types/Types";

const Timeline = () => {
  const [posts, setPosts] = useState<PostType[]>([]);
  useEffect(() => {
    const postData = collection(db, "posts");
    const q = query(postData, orderBy("timestamp", "desc"));
    // リアルタイムではないデータの取得
    // getDocs(q).then((querySnapshot) => {
    //   setPosts(querySnapshot.docs.map((doc) => doc.data()));
    // });

    // リアルタイムでデータを取得
    onSnapshot(q, (querySnapshot) => {
      setPosts(querySnapshot.docs.map((doc) => doc.data() as PostType));
    });
  }, []);

  return (
    <div className="timeline">
      {/* Header */}
      <div className="timeline_header">
        <h2>ホーム</h2>
      </div>

      {/* TweetBox */}
      <TweetBox />

      {/* Post */}
      <FlipMove>
        {posts.map((post) => (
          <Post
            key={post.text} //仮置き
            displayName={post.displayName}
            userName={post.userName}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
          />
        ))}
      </FlipMove>
    </div>
  );
};

export default Timeline;
