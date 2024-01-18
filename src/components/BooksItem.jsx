import React from "react";
import "../styles/BooksItem.css";



const BooksItem = ({ book }) => {



	return (
		<>
			<div className="container d-flex" >
				<div className="book-wrapper " >
					<img className="img-book" src={book.img} alt="Book cover" />
					<h2>{book.title}</h2>
					<p>Author: {book.author}</p>
					<span>$: {book.price}</span>
				</div>
			</div>
		</>
	);
};

export default BooksItem;
