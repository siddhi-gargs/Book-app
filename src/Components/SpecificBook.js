import React, { useContext } from "react";
import { BookContext } from "../BooksProvider";
import { useParams } from "react-router-dom";

export default function SpecificBook() {
  const { bookId } = useParams();
  const books = useContext(BookContext);

  if (!books || books.length === 0) {
    return <div>Loading book details...</div>;
  }

  const book = books.find((book) => book.id === parseInt(bookId));

  if (!book) {
    return <div>Book not found.</div>;
  }

  return (
    <div key={book.id}>
      <h2>{book.title}</h2>
      <h3>{book.author}</h3>
      <p>{book.description}</p>
    </div>
  );
}
