import React, { useState, useEffect } from 'react';
import TextLoader from '../UI/TextLoader';
import Book from './Book';
import './feedAPI.css';

const FeedAPI = ({ textVal }) => {
  const [loading, setLoading] = useState(true);
  const [books, setBooks] = useState([]);

  const getBooks = async () => {
    const res = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=quilting`
    );
    const json = await res.json();
    setLoading(false);
    setBooks(json.items);
  };

  useEffect(() => {
    getBooks();
  }, [textVal]);

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
