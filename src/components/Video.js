import React from 'react';
import Thumbnail from './Thumbnail';
import LikeButton from './LikeButton';
import '../styles/Video.css';

function Video({ video }) {
  return (
    <div className="video-card">
      <div className="video-info">
        <a href={video.url} target="_blank" rel="noopener noreferrer" className="video-link">
          <Thumbnail video={video} />
        </a>
        <div className="video-text">
          <a href={video.url} target="_blank" rel="noopener noreferrer" className="video-link">
            <h3>{video.title}</h3>
          </a>
          <p>{video.description}</p>
        </div>
      </div>
      <LikeButton videoId={video.id} />
    </div>
  );
}

export default Video;
