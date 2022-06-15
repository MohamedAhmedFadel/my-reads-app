import { BrowserRouter, Routes, Route } from "react-router-dom"
 import './App.css';
import Home from "./component/home";
import Search from "./component/search";
import { useState } from "react";
import { getAll, update } from "./BooksAPI";
function App() {

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
    <div className="App">
     <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home
          books={books}
          changeCategoryShelf={changeCategoryShelf}
          />} />
          <Route path="/search" element={<Search 
          changeCategoryShelf={changeCategoryShelf}
          />} />
         
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
