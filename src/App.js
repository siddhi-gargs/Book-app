import BookProvider from "./BooksProvider";
import Book from "./Components/Book";
import "./App.css";

function App() {
  return (
    <BookProvider>
      <Book></Book>
    </BookProvider>
  );
}

export default App;
