import React, { useState, useEffect } from 'react';
import Book from './Book';
import './feedAPI.css';

const FeedAPI = ({ textVal }) => {
  const [loading, setLoading] = useState(true);
  const [books, setBooks] = useState([]);

  const GetBooks = async () => {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=egg`
    );
    const json = await res.json();
    setLoading(false);
    setBooks(json.meals);
  };

  useEffect(() => {
    GetBooks();
  }, [textVal]);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="slider">
          <div className="slides">
            {books.map(book => (
              <div className="content">
                <Book
                  key={book.idMeal}
                  id={book.idMeal}
                  title={book.strMeal}
                  coverImg={book.strMealThumb}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FeedAPI;
