import React, { useState, createContext, useEffect } from "react";

const BookContext = createContext([]);

export default function BookProvider({ children }) {
  const [bookData, setBookData] = useState([]);
  useEffect(() => {
    fetch("/books.json")
      .then((response) => response.json())
      .then((data) => setBookData(data));
  }, []);

  return (
    <BookContext.Provider value={bookData}>{children}</BookContext.Provider>
  );
}

export { BookContext };
