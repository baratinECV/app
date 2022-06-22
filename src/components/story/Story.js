import React from "react";
import "./Story.scss";
import story from "../../assets/images/story/story.png";

export default function Story() {
  return (
    <div className='container-story'>
      <div className='content'>
        <img src={story} />
      </div>
    </div>
  );
}
