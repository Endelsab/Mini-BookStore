import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Hero from "./components/Hero";
import AddBook from "./components/AddBook";
import BooksItem from "./components/BooksItem";

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path="/" element={<Hero/>}/>
					<Route path="/AddBook" element={<AddBook />} />
					<Route path="/BookItem" element={<BooksItem />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
