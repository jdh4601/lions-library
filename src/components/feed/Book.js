import React from 'react';
import './Book.css';
import InfoModal from '../UI/InfoModal';

const Book = ({
  id,
  title,
  subtitle,
  authors,
  publisher,
  categories,
  thumbnail,
  description,
}) => {
  return (
    <>
      <div className="book" id={id}>
        <img src={thumbnail} />
        <p className="title">{title}</p>
        <InfoModal
          title={title}
          subtitle={subtitle}
          description={description}
          thumbnail={thumbnail}
          authors={authors}
          publisher={publisher}
          categories={categories}
        />
      </div>
    </>
  );
};

export default Book;
