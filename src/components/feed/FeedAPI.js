import React, { useState, useEffect } from 'react';
import Book from './Book';

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
        <ul>
          {books.map(book => (
            <Book
              key={book.idMeal}
              id={book.idMeal}
              title={book.strMeal}
              coverImg={book.strMealThumb}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default FeedAPI;
