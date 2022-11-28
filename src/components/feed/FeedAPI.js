import React, { useState, useEffect } from 'react';
import TextLoader from '../UI/TextLoader';
import Book from './Book';
import './FeedAPI.css';

const FeedAPI = ({ searchInputText }) => {
  const [loading, setLoading] = useState(true);
  const [books, setBooks] = useState([]);
  let SEARCH_VALUE = '';

  const getBooks = async () => {
    SEARCH_VALUE = searchInputText;
    const res = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${SEARCH_VALUE}`
    );
    const json = await res.json();
    setLoading(false);
    setBooks(json.items);
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <>
      {loading ? (
        <TextLoader />
      ) : (
        <div className="slider">
          <div className="slides">
            {books.map(book => (
              <div className="content">
                <Book
                  key={book.id}
                  id={book.id}
                  title={book.volumeInfo.title}
                  subtitle={book.volumeInfo.subtitle}
                  description={book.volumeInfo.description}
                  authors={book.volumeInfo.authors}
                  publisher={book.volumeInfo.publisher}
                  categories={book.volumeInfo.categories}
                  thumbnail={book.volumeInfo.imageLinks.thumbnail}
                  infoLink={book.volumeInfo.infoLink}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default FeedAPI;
