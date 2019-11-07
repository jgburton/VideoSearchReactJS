import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }

const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
const videoTitle = video.snippet.title;

  return (
    <div>
      <div className="ui embed">
      <iframe src={videoSrc} title={videoTitle} allowfullscreen="allowfullscreen"/>
      </div>
      <div className="ui segment">
        <h4 className="header">{videoTitle}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
