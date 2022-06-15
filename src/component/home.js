import View from "./view";
import { Link } from "react-router-dom";
import { useState } from "react";
import { getAll, update } from "../BooksAPI";

const Home = () => {
    
  const [books, setBooks] = useState([]);
 

  const fetchData = () => {
    getAll().then((data) => {
      setBooks(data);
    });
  };
  const changeCategoryShelf = (book, shelf) => {
    update(book, shelf);
    fetchData();
  };

  fetchData();

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <View
            books={books}
            category="currentlyReading"
            changeCategoryShelf={changeCategoryShelf}
          />
          <View
            books={books}
            category="wantToRead"
            changeCategoryShelf={changeCategoryShelf}
          />
          <View
            books={books}
            category="read"
            changeCategoryShelf={changeCategoryShelf}
          />
        </div>
      </div>
      <div className="open-search">
        <Link className="button" to="/search">
          Add a book
        </Link>
      </div>
    </div>
  );
};
export default Home;
