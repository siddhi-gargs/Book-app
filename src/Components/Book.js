import { useLocation } from "react-router-dom";
import { BookContext } from "../BooksProvider";
import { useContext, useEffect } from "react";

export default function Book() {
  const books = useContext(BookContext);
  const queryParams = new URLSearchParams(useLocation().search);
  const paramsValue = queryParams.get("name") || "";

  if (!books || books.length === 0) {
    return <div>Loading books...</div>;
  }

  const filteredBooks = books.filter((book) =>
    book.author.toLowerCase().includes(paramsValue.toLowerCase()),
  );

  return (
    <div>
      <h1>All Books</h1>
      {filteredBooks.map((book) => (
        <ul key={book.id}>
          {book.title} written by {book.author}
        </ul>
      ))}
    </div>
  );
}
