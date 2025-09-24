import React, { useState } from 'react';
import SearchInput from './SearchInput';
import VideoList from './VideoList';

function filterVideos(videos, searchText) {
  return videos.filter(video =>
    video.title.toLowerCase().includes(searchText.toLowerCase()) ||
    video.description.toLowerCase().includes(searchText.toLowerCase())
  );
}

function SearchableVideoList({ videos }) {
  const [searchText, setSearchText] = useState('');
  const foundVideos = filterVideos(videos, searchText);

  return (
    <>
      <SearchInput
        value={searchText}
        onChange={newText => setSearchText(newText)}
      />
      <VideoList
        videos={foundVideos}
        emptyHeading={`No matches for “${searchText}”`}
      />
    </>
  );
}

export default SearchableVideoList;
