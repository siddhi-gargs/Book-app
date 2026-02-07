import { BookContext } from "../BooksProvider";
import { useContext } from "react";

export default function Book() {
  const books = useContext(BookContext);

  if (!books || books.length === 0) {
    return <div>Loading books...</div>;
  }

  return (
    <div>
      <h1>All Books</h1>
      {books.map((book) => (
        <ul key={book.id}>
          {book.title} written by {book.author}
        </ul>
      ))}
    </div>
  );
}
