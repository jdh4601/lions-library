import React, { useState, useEffect } from 'react';
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

  // const postBooks = () => {
  //   fetch(`https://www.abibliadigital.com.br/api/verses/search`, {
  //     method: 'POST',
  //     body: {
  //       version: 'nvi',
  //       search: 'terra',
  //     },
  //     headers: {
  //       'content-type': 'application/json',
  //     },
  //   })
  //     .then(res => res.json())
  //     .then(data => console.log(data));
  // };

  useEffect(() => {
    getBooks();
  }, [textVal]);

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
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
