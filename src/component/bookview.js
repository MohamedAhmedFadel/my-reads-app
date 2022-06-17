import propTypes from "prop-types";

const BookView = (props) => {
  let imageUrl;
  if (props.book.imageLinks) {
    imageUrl = props.book.imageLinks.thumbnail;
  } else {
    imageUrl = "";
  }
  return (
    <div className="bookshelf-books">
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: `url(${imageUrl})`,
              }}
            ></div>
            <div className="book-shelf-changer">
              <select
                onChange={(event) =>
                  props.changeCategoryShelf(props.book, event.target.value)
                }
                value={props.category}
              >
                <option value="move" disabled>
                  Move to...
                </option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{props.book.title}</div>
          <div className="book-authors">{props.book.authors}</div>
        </div>
      </li>
    </div>
  );
};

BookView.propTypes = {
  books: propTypes.array,
  category: propTypes.string.isRequired,
  changeCategoryShelf: propTypes.func.isRequired,
};

export default BookView;
