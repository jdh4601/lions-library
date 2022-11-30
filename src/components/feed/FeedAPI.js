import React, { useState, useEffect } from 'react';
import TextLoader from '../UI/TextLoader';
import Book from './Book';
import './FeedAPI.css';

const FeedAPI = ({ searchInputText }) => {
  const [loading, setLoading] = useState(true);
  const [books, setBooks] = useState([]);

  // fetch book api & add to array
  const getBooks = async () => {
    const res = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=brain`
    );
    const json = await res.json();
    setLoading(false);
    setBooks(json.items);
  };

  // Filtered array elements which contain user input
  const filteredBooks = books.filter(element => {
    if (searchInputText === '') {
      return element;
    } else {
      return element.volumeInfo.title.toLowerCase().includes(searchInputText);
    }
  });

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
            {filteredBooks.map(book => (
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
