import React, { useContext } from 'react';
import InfoModal from '../UI/InfoModal';
import BookContext from '../context/BookContext';
import './Book.css';

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
  // const { books } = useContext(BookContext);

  return (
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
  );
};

export default Book;
