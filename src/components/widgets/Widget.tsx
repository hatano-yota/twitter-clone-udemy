import { Search } from "@mui/icons-material";
import React from "react";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import "./Widget.css";

const Widget = () => {
  return (
    <div className="widgets">
      <div className="widget_input">
        <Search className="widget_searchIcon" />
        <input placeholder="キーワード検索" type="text"></input>
      </div>
      <div className="widget_container">
        <h2>いまどうしてる？</h2>

        {/* ライブラリを追加 */}
        <TwitterTweetEmbed tweetId={"1604816315386150916"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="nogisatsu"
          options={{ height: 400 }}
        />
        <TwitterShareButton
          url={"https://twitter.com/katakoto_666"}
          options={{ text: "絢音ちゃん尊い" }}
        />
      </div>
    </div>
  );
};

export default Widget;
