import React from 'react';

function Thumbnail({ video }) {
  return <img src={video.thumbnail} alt={video.title} width="200" />;
}

export default Thumbnail;
