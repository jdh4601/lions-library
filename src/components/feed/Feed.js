import React, { useState } from 'react';
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
          <div className="book_box">
            <FeedAPI textVal={searchInputText} />
          </div>
          <div className="btn_box">
            <button className="total-btn">Total</button>
            <div className="btns">
              <button className="popular">인기</button>
              <button className="profile">My</button>
              <button className="record">기록</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feed;
