import React from 'react';
import SearchableVideoList from './components/SearchableVideoList';
import { videos } from './data';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>React Videos</h1>
        <p>A brief history of React</p>
      </header>
      <SearchableVideoList videos={videos} />
    </div>
  );
}

export default App;
