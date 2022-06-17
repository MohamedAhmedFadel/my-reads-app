import View from "./view";
import { Link } from "react-router-dom";
import propTypes from "prop-types";

const Home = (props) => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <View
            books={props.books}
            category="currentlyReading"
            changeCategoryShelf={props.changeCategoryShelf}
          />
          <View
            books={props.books}
            category="wantToRead"
            changeCategoryShelf={props.changeCategoryShelf}
          />
          <View
            books={props.books}
            category="read"
            changeCategoryShelf={props.changeCategoryShelf}
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

Home.propTypes = {
  books: propTypes.array.isRequired,
  changeCategoryShelf: propTypes.func.isRequired,
};

export default Home;
