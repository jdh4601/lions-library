import React, { useState } from 'react';
import BottomBtn from '../UI/BottomBtn';
import FeedAPI from './FeedAPI';
import Card from '../UI/Card';
import Search from '../UI/Search';
import './Feed.css';

function Feed() {
  const [searchInputText, setSearchInputText] = useState('');

  const inputHandler = event => {
    let lower = event.target.value.toLowerCase();
    setSearchInputText(lower);
  };

  return (
    <>
      <Card>
        <div className="header">
          <h1>실시간 인기 도서</h1>
          <Search inputHandler={inputHandler} />
        </div>
        <div className="body">
          <FeedAPI searchInputText={searchInputText} />
          <BottomBtn />
        </div>
      </Card>
    </>
  );
}

export default Feed;
