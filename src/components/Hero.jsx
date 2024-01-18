import React from "react";
import { Link } from "react-router-dom";

import BooksItem from "./BooksItem";
import { useState, useEffect } from "react";
import axios from "axios";



const Hero = () => {
	const [books, setBooks] = useState([]);

	useEffect(() => {
		const getBooks = async () => {
			try {
				const res = await axios.get("http://localhost:9000/booksItem");
				setBooks(res.data)
			} catch (err) {
				console.log(err);
			}
		};
		getBooks();
	},[]);
	

	

	return (
		<>
			<div className="container-fluid bg-primary text-start pt-3 pb-3">
				<h1>Books Store</h1>
			</div>

			<div className="container  ">
				<div className="row ">
					<div className="col text-center mt-2 rounded-2   shadow-lg">
						<h3>Welcome To My Books Store !</h3>
						<p className="">Wendel's Books Store is open anytime anywhere</p>
						<p>
							If you have any concern please call 879-9768-4646 anytime anywhere
						</p>

						<button className="btn btn-primary mb-2">
							{" "}
							<Link
								to="/AddBook"
								className="text-white"
								style={{ textDecoration: "none" }}>
								Add Book
							</Link>
						</button>
					</div>
				</div>
			</div>
			<div className="booksItem">
				{
					books.map(book =>(
						<div key={book.id}>

						
						<BooksItem book={book}/>
						</div>
					))
				}
			</div>
		</>
	);
};

export default Hero;
