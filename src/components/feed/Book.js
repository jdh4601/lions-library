import React from 'react';
import './Book.css';

const Book = ({ id, coverImg, title }) => {
  return (
    <>
      <div className="book">
        <img src={coverImg} />
        <p className="title">{title}</p>
      </div>
    </>
  );
};

export default Book;
