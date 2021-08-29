import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Statistics from "./components/Statistics";
import Boost from "./components/Boost";
import Footer from "./components/Footer";
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
	return (
		<>
			<ToastContainer/>
			<Header />
			<Hero />
			<Statistics />
			<Boost />
			<Footer />
		</>
	);
}

export default App;
