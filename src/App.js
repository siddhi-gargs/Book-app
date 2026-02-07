import BookProvider from "./BooksProvider";
import Book from "./Components/Book";
import SpecificBook from "./Components/SpecificBook";
import "./App.css";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <BookProvider>
        <Routes>
          <Route path="/" element={<Book></Book>}></Route>
          <Route path="/books" element={<Navigate to="/"></Navigate>}></Route>
          <Route
            path="/books/:bookId"
            element={<SpecificBook></SpecificBook>}
          ></Route>
        </Routes>
      </BookProvider>
    </Router>
  );
}

export default App;
