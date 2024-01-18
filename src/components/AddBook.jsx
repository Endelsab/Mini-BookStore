import React, { useState } from "react";
import "../styles/AddBook.css";
import { Link } from "react-router-dom";
import Axios from 'axios'

const AddBook = () => {
	//stateHooks
	const [title, setTitle] = useState("");
	const [author, setAuthor] = useState("");
	const [price,setPrice] = useState("")
	const [file, setFile] = useState();

	//Functions
	
		const addBook = async () => {
			try {
				const formData = new FormData();
				formData.append("file", file);

				await Axios.post("http://localhost:9000/booksItem", formData);

				await Axios.post("http://localhost:9000/booksItem", {
					title: title,
					author: author,
					img: file,
					price: price,
				});
			} catch (err) {
				console.log(err);
			}
		};
	

	return (
		<>
			<div className="container-fluid bg-primary text-start pt-3 pb-3">
				<Link to="/">
					<h1 className="Home" style={{ cursor: "pointer" }}>
						Books Store
					</h1>
				</Link>
			</div>

			<div className="form-wrapper ">
				<form>
					<div className=" form bg-white border rounded-4 shadow-lg mt-3">
						<h3 className="text-center">Add Book</h3>
						<input
							className="form-control mt-4"
							type="text"
							placeholder="Enter title"
							value={title}
							onChange={(e) => setTitle(e.target.value)}
						/>
						<input
							className="form-control mt-3"
							type="text"
							placeholder="Enter author"
							value={author}
							onChange={(e) => setAuthor(e.target.value)}
						/>
						<input
							className="form-control mt-3 " style={{width:'200px'}}
							type="number"
							placeholder="$:"
							value={price}
							onChange={(e) => setPrice(e.target.value)}
						/>
						<input
							className="mt-3"
							type="file"
							name="file"
							onChange={(e) => setFile(e.target.files[0])}
						/>

						<button className="btn btn-primary " onClick={addBook}><Link className="wendel" to="/">Add</Link></button>
					</div>
				</form>
			</div>
		</>
	);
};

export default AddBook;
