import React, { createContext, useState } from 'react';

const BookContext = createContext();

export function BookProvider({ children }) {
  const [books, setBooks] = useState([]);

  return (
    <BookContext.Provider value={{ books }}>{children}</BookContext.Provider>
  );
}

export default BookContext;
