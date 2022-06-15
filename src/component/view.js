
import BookView from './bookview';

const View =(props)=> {
	
		return (
			<div className="bookshelf">
				<h2 className="bookshelf-title">{props.category}</h2>
				<ol className="books-grid">
					{props.books
						.filter((book) => book.shelf === `${props.category}`)
						.map((book) => (
							<div key={book.id}>
								<BookView
									book={book}
									category={props.category}
									changeCategoryShelf={props.changeCategoryShelf}
								/>
							</div>
						))}
				</ol>
			</div>
		);
	}

export default View;
