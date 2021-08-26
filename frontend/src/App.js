import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Shortener from "./components/Shortener";
import Statistics from "./components/Statistics";
import Boost from "./components/Boost";
import Footer from "./components/Footer";
import './App.css';

function App() {
	return (
		<>
			<Header />
			<Hero />
			<Shortener />
			<Statistics />
			<Boost />
			<Footer/>
		</>
	);
}

export default App;
