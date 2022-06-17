import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./component/home";
import Search from "./component/search";
import { useState, useEffect } from "react";
import { getAll, update } from "./BooksAPI";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      const fetchData = () => {
        getAll().then((data) => {
          setBooks(data);
        });
      };
      fetchData();
    }
    return () => {
      mounted = false;
    };
  }, []);

  const changeCategoryShelf = (book, shelf) => {
    update(book, shelf);

    getAll().then((data) => {
      setBooks(data);
    });
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home books={books} changeCategoryShelf={changeCategoryShelf} />
            }
          />
          <Route
            path="/search"
            element={<Search changeCategoryShelf={changeCategoryShelf} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
