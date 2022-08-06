import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import './scss/app.scss';
import Header from 'components/Header/Header';
import Top from 'components/Top/Top';
import Home from 'pages/Home';
import Employer from 'pages/Employer';
import Join from 'components/Join/Join';



import Footer from './components/Footer/Footer';

function App() {
	return (
		<div className="App">
			<Header />
			<Top />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/employer' element={<Employer />} />
			</Routes>

			<Join />
			<Footer />
		</div>
	);
}

export default App;
