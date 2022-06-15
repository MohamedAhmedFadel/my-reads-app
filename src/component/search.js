import { useState } from "react";
import { Link } from "react-router-dom";
import BookView from "./bookview";
import { search } from "../BooksAPI";

const Search = (props) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const changeQ = (query) => {
    setQuery(query.trim());
  };

  const searchF = (query) => {
    if (query.length !== 0) {
      search(query).then((data) => {
        setResults(data);
      });
    } else {
      setResults([]);
    }
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            value={query}
            placeholder="Search by title or author"
            onChange={(event) => {
              changeQ(event.target.value);
              searchF(query);
            }}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {results.map((result) => (
            <div key={result.id}>
              <BookView
                book={result}
                changeCategoryShelf={props.changeCategoryShelf}
              />
            </div>
          ))}
        </ol>
      </div>
    </div>
  );
};
export default Search;
