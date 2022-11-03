import React from 'react';
import './feed.css';

function Feed() {
  return (
    <div>
      <div className="container">
        <div className="header">
          <h1>실시간 인기 도서</h1>
        </div>
        <div className="body">
          <ul className="books">
            <li>
              <p>Book1</p>
              <img src="*" />
            </li>
            <li>
              <p>Book2</p>
              <img src="*" />
            </li>
            <li>
              <p>Book3</p>
              <img src="*" />
            </li>
            <li>
              <p>Book4</p>
              <img src="*" />
            </li>
            <li>
              <p>Book5</p>
              <img src="*" />
            </li>
            <li>
              <p>Book6</p>
              <img src="*" />
            </li>
          </ul>
          <div className="btn-box">
            <button className="total-btn">Total</button>
            <div className="btns">
              <button className="hot">인기도서</button>
              <button className="profile">Profile</button>
              <button className="record">Record</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feed;
