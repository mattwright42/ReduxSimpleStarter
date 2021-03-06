import React from 'react';

import '../../style/style.css';

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url} />
      </div>
      <div className="deatils">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.decscription}</div>
      </div>
    </div>
  );
};

export default VideoDetail;
