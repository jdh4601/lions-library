import React, { useState } from 'react';
import BottomBtn from '../UI/BottomBtn';
import FeedAPI from './FeedAPI';
import './Feed.css';

function Feed() {
  const [searchInputText, setSearchInputText] = useState('');

  return (
    <div>
      <div className="container">
        <div className="header">
          <h1>실시간 인기 도서</h1>
          <input
            type="text"
            value={searchInputText}
            onChange={e => setSearchInputText(e.target.value)}
          />
        </div>
        <div className="body">
          <FeedAPI textVal={searchInputText} />
          <BottomBtn />
        </div>
      </div>
    </div>
  );
}

export default Feed;
